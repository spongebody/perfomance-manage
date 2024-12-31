## 一：管理端接口

1：登录

请求：POST

URL：http://43.139.6.217:10060/user/login

请求体：

```json
{

  "username":"root",  //用户名

  "password":"root"  //密码

}
```



响应：

```json
{

  "code": 200,

  "message": "success",

  "data": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdGFmZlR5cGUiOjEsImV4cCI6MTczNTQ1ODk3Miwic3RhZmZJZCI6MSwidXNlcm5hbWUiOiJyb290In0.1F7SsGUo0GLS7JnYnUDu9zHYul0NmWkyevAWFhOnfGQ"   //token，后面需要把这个token带到请求头里，字段为token

}


```



2：新增职工

请求：POST

URL:http://43.139.6.217:10060/staff/add

请求体：

```json
{

  "avator": "/images/avatar/9.jpg", //头像路径，可不传

  "departmentId": 5, //部门id  

  "edu": "本科",  学历

  "idCard": "110101403531666",  //身份证号

  "name": "滑大机", //姓名

  "number": "S38435435", //职工号

  "password": "123456", //密码

  "phone": "131666555123", //手机号

  "tag": 2, //标签，1是root用户，2是部门负责人，3是普通员工

  "title": "软件工程师", //职称

  "username": "user396" //用户名

}
```



响应：

```json
{

  "code": 200,

  "message": "success",

  "data": **null**

}


```



3：职工列表

请求：POST

URL:http://43.139.6.217:10060/staff/list

请求体：

```json
{

  "pageNo":1, //页数

  "pageSize":10 //每页数量

}
```



响应：

```json
{
    "code": 200,
    "message": "success",
    "data": {
        "records": [
            {
                "id": 2,
                "number": "S384344435",
                "name": "张五",
                "tag": 1,
                "avator": "/images/avatar/3.jpg",
                "departmentId": 5,
                "title": "软件工程师",
                "edu": "本科",
                "phone": "1387878722515",
                "idCard": "11010173222544221",
                "createTime": 1735208018,
                "updateTime": 1735373204,
                "department": "理科",
                "className": "物理"
            },
            {
                "id": 3,
                "number": "S38435435",
                "name": "滑大机",
                "tag": 3,
                "avator": "/images/avatar/9.jpg",
                "departmentId": 5,
                "title": "软件工程师",
                "edu": null,
                "phone": "131666555123",
                "idCard": "110101403531666",
                "createTime": 1735289648,
                "updateTime": null,
                "department": "理科",
                "className": "物理"
            },
            {
                "id": 4,
                "number": "S38435423225",
                "name": "滑大机222",
                "tag": 2,
                "avator": "/images/avatar/9111.jpg",
                "departmentId": 5,
                "title": "软件工程师",
                "edu": null,
                "phone": "131666255522123",
                "idCard": "11010142203531666",
                "createTime": 1735372750,
                "updateTime": null,
                "department": "理科",
                "className": "物理"
            }
        ],
        "total": 3,
        "size": 10,
        "current": 1,
        "pages": 1
    }
}
```





4.修改职工信息

请求:POST

URL:http://43.139.6.217:10060/staff/update

请求体:

```json
{

  "avator": "/images/avatar/3.jpg",

  "departmentId": 5,

  "edu": "本科",

  "idCard": "11010173222544221",

  "name": "张五",

  "number": "S14798228776",

  "phone": "1387878722515",

  "tag": 1,

  "title": "软件工程师",

  "id": 2

}
```



响应:

```json
{

  "code": 200,

  "message": "success",

  "data": **null**

}
```



5.新增科室

请求：POST

URL：http://43.139.6.217:10060/department/add

请求体：

```json
{
    "department": "理科",  //部门英文
    "className": "化学"	//科室名称
}
```

响应:

```json
{
    "code": 200,
    "message": "success",
    "data": null
}
```



6.修改科室

请求：POST

URL：http://43.139.6.217:10060/department/update

请求体:

```json
{
    "department": "理科",//部门英文
    "className": "生物",//科室名称
    "id": 5  //科室id
}
```

响应:

```json
{
    "code": 200,
    "message": "success",
    "data": null
}
```



7.查询科室

请求：POST

URL：http://43.139.6.217:10060/department/list

请求体:

```json
{
    "pageNo":1,
    "pageSize":10,
    "department":"理科", //部门名称，可传参数
    "className":"生物" //科室名称，可传参数
}
```

响应:

```json
{
    "code": 200,
    "message": "success",
    "data": {
        "records": [
            {
                "id": 5,
                "department": "理科",//部门名称
                "className": "生物",//科室名称
                "staffId": null,
                "createTime": 1735281484, //创建时间，10位数字时间戳
                "updateTime": 1735401583 ////修改时间，10位数字时间戳
            }
        ],
        "total": 1, //惩罚类型总数
        "size": 10,  //每页数量
        "current": 1, //当前页数
        "pages": 1 //总页数
    }
}
```



8：查询考勤列表

请求：POST

URL：http://43.139.6.217:10060/attendance/list

请求体:

```json
{
    "pageNo":1,
    "pageSize":10,
    "department":"理科", //部门名称，可传参数
    "className":"生物" //科室名称，可传参数
}
```

响应:

```json
{
    "code": 200,
    "message": "success",
    "data": {
        "records": [
            {
                "id": 2,//职工id
                "number": "S384344435", //职工号
                "staffName": "张五", //职工名称
                "department": "理科", //职工所在部门
                "className": "生物", //职工所在科室
                "late": 0, //迟到次数
                "leave": 0, //请假次数
                "lack": 0 //缺勤次数
            },
            {
                "id": 4,
                "number": "S38435423225",
                "staffName": "滑大机222",
                "department": "理科",
                "className": "生物",
                "late": 0,
                "leave": 0,
                "lack": 0
            }
        ],
        "total": 2,
        "size": 10,
        "current": 1,
        "pages": 1
    }
}
```



9：修改考勤

请求：POST

URL：http://43.139.6.217:10060/attendance/update

请求体:

```json
{
    "staffId":3, //职工id
    "late": 1 //迟到次数
    "leave": 0, //请假次数
    "lack": 0 //缺勤次数
}
```

响应：

```
{
    "code": 200,
    "message": "success",
    "data": null
}
```



10：新增班导师

请求：POST

URL：http://43.139.6.217:10060/classTeacher/add

请求体:

```json
{
    "staffId":3, //职工id
    "manageClass":"姚班",//班级名称
    "classCount":15 //班级人数
}
```

响应:

```json
{
    "code": 200,
    "message": "success",
    "data": null
}
```



11：查看班导师

请求：POST

URL：http://43.139.6.217:10060/classTeacher/list

请求体：

```
{
    "pageNo":1, //页数
    "pageSize":10, //每页数量
    "department":"理科",  //导师部门名称
    "className":"生物", //导师科室名称
    "manageClass":"滑稽" //管理班级名称
}
```

响应:

```json
{
    "code": 200,
    "message": "success",
    "data": {
        "records": [
            {
                "id": 1, //班导师表id
                "staffId": 2,  //班导师的职工id
                "number": "S384344435",//班导师职工号
                "staffName": "张五", //班导师姓名
                "department": "理科", //班导师所在部门
                "className": "生物", //班导师所在科室名称
                "manageClass": "尖子班", //班级名称
                "classCount": 10, //班级人数
                "createTime": 1735290286,//创建时间，10位时间戳
                "updateTime": null
            }
        ],
        "total": 1,
        "size": 10,
        "current": 1,
        "pages": 1
    }
}
```



12：获取菜单

请求:POST

URL:http://43.139.6.217:10060/menu/list 

请求体：

```json
{}
```

响应：

```json
{
    "code": 200,
    "message": "success",
    "data": {
        "username": "root", //用户名
        "staffType": 1, //用户类型，1管理员，2科室负责人，3普通员工
        "avator": null, //头像路径
        "menu": {
            "id": 0, //菜单id
            "pid": 0, //菜单父id
            "name": "root", //菜单名称
            "path": null,//菜单路径
            "child": [  //子菜单
                {
                    "id": 1,
                    "pid": 0,
                    "name": "菜单",
                    "path": "",
                    "child": [
                        {
                            "id": 13,
                            "pid": 1,
                            "name": "菜单列表",
                            "path": "/menu/list",
                            "child": null
                        }
                    ]
                },
                {
                    "id": 2,
                    "pid": 0,
                    "name": "考勤",
                    "path": null,
                    "child": [
                        {
                            "id": 14,
                            "pid": 2,
                            "name": "考勤列表",
                            "path": "/attendance/list",
                            "child": null
                        },
                        {
                            "id": 15,
                            "pid": 2,
                            "name": "修改考勤",
                            "path": "/attendance/update",
                            "child": null
                        }
                    ]
                },
                {
                    "id": 3,
                    "pid": 0,
                    "name": "班导师",
                    "path": null,
                    "child": [
                        {
                            "id": 16,
                            "pid": 3,
                            "name": "班导师列表",
                            "path": "/classTeacher/list",
                            "child": null
                        },
                        {
                            "id": 17,
                            "pid": 3,
                            "name": "新增班导师",
                            "path": "/classTeacher/add",
                            "child": null
                        },
                        {
                            "id": 18,
                            "pid": 3,
                            "name": "修改班导师",
                            "path": "/classTeacher/update",
                            "child": null
                        },
                        {
                            "id": 19,
                            "pid": 3,
                            "name": "删除班导师",
                            "path": "/classTeacher/del",
                            "child": null
                        }
                    ]
                },
                {
                    "id": 5,
                    "pid": 0,
                    "name": "部门",
                    "path": null,
                    "child": [
                        {
                            "id": 24,
                            "pid": 5,
                            "name": "部门列表",
                            "path": "/department/list",
                            "child": null
                        },
                        {
                            "id": 25,
                            "pid": 5,
                            "name": "新增部门",
                            "path": "/department/add",
                            "child": null
                        },
                        {
                            "id": 26,
                            "pid": 5,
                            "name": "修改部门",
                            "path": "/department/update",
                            "child": null
                        }
                    ]
                },
                {
                    "id": 11,
                    "pid": 0,
                    "name": "员工",
                    "path": null,
                    "child": [
                        {
                            "id": 48,
                            "pid": 11,
                            "name": "员工列表",
                            "path": "/staff/list",
                            "child": null
                        },
                        {
                            "id": 49,
                            "pid": 11,
                            "name": "修改员工",
                            "path": "/staff/update",
                            "child": null
                        },
                        {
                            "id": 50,
                            "pid": 11,
                            "name": "新增员工",
                            "path": "/staff/add",
                            "child": null
                        }
                    ]
                }
            ]
        },
        "name": null
    }
}
```



13：新增竞赛

方式：POST

URL:http://43.139.6.217:10060/competition/add 

请求：

```json
{
    "name":"测试比赛", //竞赛名称
    "staffId":"2" //职工id
}
```

响应:

```json
{
    "code": 200,
    "message": "success",
    "data": null
}
```

14：修改竞赛

方式：POST

URL：http://43.139.6.217:10060/competition/update 

请求:

```json
{
    "id":1,
    "name":"测试比赛2", 
    "staffId":"3"
}
```

响应:

```json
{
    "code": 200,
    "message": "success",
    "data": null
}
```



15:竞赛列表

方式：POST

URL：http://43.139.6.217:10060/competition/list 

请求:

```json
{
    "pageNo":1, //页数
    "pageSize":10, //每页数量
    "department":"理科",//获奖人部门名称
    "className":"物理",//获奖人科室名称
    "competitionName":"比赛" //竞赛名称
}
```



16：新增考核

方式：POST

URL：http://43.139.6.217:10060/examine/add 

请求

```json
{
    "content":"考核内容"
}
```

响应：

```json
{
    "code": 200,
    "message": "success",
    "data": null
}
```



17:修改考核

方式：POST

URL:http://43.139.6.217:10060/examine/update

请求：

```json
{	
    "id":1,//考核列表id
    "content":"考核内容"
}
```

响应：

```json
{
    "code": 200,
    "message": "success",
    "data": null
}
```



18:考核列表

请求：POST

URL:http://43.139.6.217:10060/examine/list

请求体：

```json
{
    "pageNo":1, 
    "pageSize":10,   
    "content":"考核" //查询内容
}
```

响应:

```json
{
    "code": 200,
    "message": "success",
    "data": {
        "records": [
            {
                "id": 1, //考核表id
                "content": "考核内2容", //考核内容
                "createTime": 1735546814, //创建时间，10位数据时间戳 
                "updateTime": 1735547111 //更新时间，10位数据时间戳
            }
        ],
        "total": 1,
        "size": 10,
        "current": 1,
        "pages": 1
    }
}
```



18:删除考核内容

请求：POST

URL:http://43.139.6.217:10060/examine/del

请求体：

```json
{
    "id":1 //考核表id
}
```

响应：

```json
{
    "code": 200,
    "message": "success",
    "data": null
}
```



19：新增惩罚类型

请求方式：POST

URL：http://43.139.6.217:10060/punishmentContentList/add 

请求体:

```json
{
    "punishmentType":"手慢拍大腿" //惩罚类型
}
```

响应:

```json
{
    "code": 200,
    "message": "success",
    "data": null
}
```



20：修改惩罚类型

请求方式：POST

URL：http://43.139.6.217:10060/punishmentContentList/update

请求体:

```json
{   
    "id":1,
    "punishmentType":"手慢拍大腿2"
}
```

响应:

```json
{
    "code": 200,
    "message": "success",
    "data": null
}
```





21：查看惩罚类型列表

请求方式：POST

URL：http://43.139.6.217:10060/punishmentContentList/list

请求体：

```json
{   
    "pageNo":1,
    "pageSize":10,
    "type":"拍大腿" //惩罚类型查询内容
}
```

响应：

```json
{
    "code": 200,
    "message": "success",
    "data": {
        "records": [
            {
                "id": 1,  //惩罚类型id
                "punishmentType": "手慢拍大腿2",//惩罚类型
                "createTime": 1735548263,
                "updateTime": 1735548398
            }
        ],
        "total": 1, //惩罚类型总数
        "size": 10,  //每页数量
        "current": 1, //当前页数
        "pages": 1 //总页数
    }
}
```



22：删除惩罚类型

请求方式：POST

URL：http://43.139.6.217:10060/punishmentContentList/del

请求体:

```json
{
    "id": 1 //惩罚类型id
}
```

响应:

```json
{
    "code": 200,
    "message": "success",
    "data": null
}
```



23：新增惩罚

请求方式：POST

URL：http://43.139.6.217:10060/punishment/add

请求体：

```json
{
    "staffId": 3,  //职工ID
    "punishmentTypeId":2,//惩罚类型列表ID
    "Reason":"跑路"//惩罚名称
}
```

响应：

```json
{
    "code": 200,
    "message": "success",
    "data": null
}
```



24：修改惩罚

请求方式：POST

URL：http://43.139.6.217:10060/punishment/update 

请求：

```json
{
    "id":1,
    "staffId": 3,
    "punishmentTypeId":2,
    "Reason":"卧槽"
}
```

响应：

```json
{
    "code": 200,
    "message": "success",
    "data": null
}
```



25：查看惩罚

请求方式：POST

URL：http://43.139.6.217:10060/punishment/list 

请求：

```json
{
   "pageNo":1,
   "pageSize":10,
   "punishmentType":"惩",
   "department":"理科",
   "className":"物理"
}
```

响应:

```json
{
    "code": 200,
    "message": "success",
    "data": {
        "records": [
            {
                "id": 1, 
                "staffId": 3,
                "number": "S38435435",
                "staffName": "滑大机",
                "department": "理科",
                "className": "数学",
                "punishmentType": "手慢拍大腿",//惩罚类型
                "createTime": 1735549626,
                "updateTime": 1735549708,
                "reason": "跑路了"  //惩罚内容
            }
        ],
        "total": 2,
        "size": 1,
        "current": 1,
        "pages": 2
    }
}
```



26：删除惩罚

请求方式：POST

URL：http://43.139.6.217:10060/punishment/del

请求体：

```json
{
    "id":1 //惩罚ID
}
```

响应：

```json
{
    "code": 200,
    "message": "success",
    "data": null
}
```



27：新增奖励类型

请求方式：POST

URL：http://43.139.6.217:10060/rewardContentList/add

请求体:

```json
{
    "rewardType":"手慢拍大腿" //奖励类型
}
```

响应:

```json
{
    "code": 200,
    "message": "success",
    "data": null
}
```



28：修改奖励类型

请求方式：POST

URL：http://43.139.6.217:10060/rewardContentList/update

请求体:

```json
{   
    "id":1,
    "rewardType":"手慢拍大腿2"
}
```

响应:

```json
{
    "code": 200,
    "message": "success",
    "data": null
}
```





29：查看奖励类型列表

请求方式：POST

URL：http://43.139.6.217:10060/rewardType/list

请求体：

```json
{   
    "pageNo":1,
    "pageSize":10,
    "type":"拍大腿" //奖励类型查询内容
}
```

响应：

```json
{
    "code": 200,
    "message": "success",
    "data": {
        "records": [
            {
                "id": 1,  //奖励类型id
                "punishmentType": "手慢拍大腿2",//奖励类型
                "createTime": 1735548263,
                "updateTime": 1735548398
            }
        ],
        "total": 1, //奖励类型总数
        "size": 10,  //每页数量
        "current": 1, //当前页数
        "pages": 1 //总页数
    }
}
```



30：删除奖励类型

请求方式：POST

URL：http://43.139.6.217:10060/rewardType/del

请求体:

```json
{
    "id": 1 //奖励类型id
}
```

响应:

```json
{
    "code": 200,
    "message": "success",
    "data": null
}
```



31：新增奖励

请求方式：POST

URL：http://43.139.6.217:10060/reward/add

请求体：

```json
{
    "staffId": 3,  //职工ID
    "rewardTypeId":2,//奖励类型列表ID
    "Reason":"跑路"//奖励名称
}
```

响应：

```json
{
    "code": 200,
    "message": "success",
    "data": null
}
```



32：修改惩罚

请求方式：POST

URL：http://43.139.6.217:10060/reward/update

请求：

```json
{
    "id":1,
    "staffId": 3,
    "rewardTypeId":2,
    "Reason":"卧槽"
}
```

响应：

```json
{
    "code": 200,
    "message": "success",
    "data": null
}
```



33：查看惩罚

请求方式：POST

URL：http://43.139.6.217:10060/reward/list

请求：

```json
{
   "pageNo":1,
   "pageSize":10,
   "rewardType":"惩",
   "department":"理科",
   "className":"物理"
}
```

响应:

```json
{
    "code": 200,
    "message": "success",
    "data": {
        "records": [
            {
                "id": 1, 
                "staffId": 3,
                "number": "S38435435",
                "staffName": "滑大机",
                "department": "理科",
                "className": "数学",
                "rewardType": "手慢拍大腿",//奖励类型
                "createTime": 1735549626,
                "updateTime": 1735549708,
                "reason": "跑路了"  //奖励名称
            }
        ],
        "total": 2,
        "size": 1,
        "current": 1,
        "pages": 2
    }
}
```



34：删除奖励

请求方式：POST

URL：http://43.139.6.217:10060/reward/del

请求体：

```json
{
    "id":1 //奖励ID
}
```

响应：

```json
{
    "code": 200,
    "message": "success",
    "data": null
}
```



35：修改班导师

请求方式：POST

URL：http://43.139.6.217:10060/classTeacher/update
请求体：

```json
{
    "id":1,
    "staffId":2,
    "manageClass":"华班",
    "classCount":12
}
```

响应：

```json
{
    "code": 200,
    "message": "success",
    "data": null
}
```



36：删除班导师

请求方式：POST

URL：http://43.139.6.217:10060/classTeacher/del

请求体：

```json
{
    "id":1 //班导师列表id
}
```

响应：

```json
{
    "code": 200,
    "message": "success",
    "data": null
}
```



37：删除竞赛

请求方式：POST

URL：http://43.139.6.217:10060/competition/del

请求体：

```json
{
    "id":1 //竞赛列表id
}
```

响应：

```json
{
    "code": 200,
    "message": "success",
    "data": null
}
```


38：删除科室

请求方式：POST

URL：http://43.139.6.217:10060/department/del

请求体：

```json
{
    "id":1 //科室列表id
}
```

响应：

```json
{
    "code": 200,
    "message": "success",
    "data": null
}
```