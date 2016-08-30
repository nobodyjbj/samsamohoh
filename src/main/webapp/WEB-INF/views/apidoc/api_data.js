define({ "api": [
  {
    "type": "post",
    "url": "/familyListAjax",
    "title": "",
    "version": "0.1.0",
    "name": "FamilyListM",
    "group": "FamilyList",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "searchYear",
            "description": "<p>search year ('YYYY')</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "searchMonth",
            "description": "<p>search month ('MM')</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "searchDay",
            "description": "<p>search day ('DD')</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>current Page</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "FoundFamilyList",
            "description": "<p>FamilyList was found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n [{\"reg_date\":\"YYYY-MM-DD\", \"family_seq\":\"Number\", \"meal_type\":\"(0,1,2,3)\", \"name\":\"restaurants name\", \"cnt\":\"Number\"},,,,{}]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/LeeYura/git/samsamohoh/src/main/java/ex2i/kr/samsamohoh/controller/FamilyMgrController.java",
    "groupTitle": "FamilyList"
  },
  {
    "type": "post",
    "url": "/loginCheck",
    "title": "[AppLogin]",
    "version": "0.1.0",
    "name": "Login",
    "group": "Login",
    "description": "<p>If you access from the android must have access to the token value.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "AddReceipt",
            "description": "<p>Receipt add success</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n {\"state\":\"true\"}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/LeeYura/git/samsamohoh/src/main/java/ex2i/kr/samsamohoh/controller/LoginController.java",
    "groupTitle": "Login"
  },
  {
    "type": "POST",
    "url": "/compareIdAjax",
    "title": "[WebLogin]",
    "version": "0.1.0",
    "name": "UserLogin",
    "group": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "idtoken",
            "optional": false,
            "field": "idtoken",
            "description": "<p>Users unique TOKEN.</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/LeeYura/git/samsamohoh/src/main/java/ex2i/kr/samsamohoh/controller/LoginController.java",
    "groupTitle": "Login"
  },
  {
    "type": "post",
    "url": "/doGetFamilyAjax",
    "title": "[FamilyList]",
    "version": "0.1.0",
    "name": "FamilyList",
    "group": "Main",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ExistFamily",
            "description": "<p>The FamilyInfo was exist</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  [{code=restaurant'sCode, meal_type=(0,1,2,3), change_name=prefix-file.jpg, real_name=file.jpg, \n    members=memberCode,memberCode,memberCode, seq=Number, restaurant_name=restaurants Name}]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/LeeYura/git/samsamohoh/src/main/java/ex2i/kr/samsamohoh/controller/FamilyController.java",
    "groupTitle": "Main"
  },
  {
    "type": "post",
    "url": "/doJoinSetFamilyAjax",
    "title": "[FamilyRegister]",
    "version": "0.1.0",
    "name": "FamilyRegister",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "RESTAURNAT_CODE",
            "description": "<p>Restaurant unique CODE</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "MEMBER_CODE",
            "description": "<p>Users unique CODE</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ExistFamily",
            "description": "<p>The SetFamily was Set</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n web - \"1\"\n app - \"true\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/LeeYura/git/samsamohoh/src/main/java/ex2i/kr/samsamohoh/controller/FamilyController.java",
    "groupTitle": "Main"
  },
  {
    "type": "post",
    "url": "/doGetMembersAjax",
    "title": "[MemberList]",
    "version": "0.1.0",
    "name": "Family_in_MemberList",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "FAMILY_SEQ",
            "description": "<p>Family unique SEQ</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ExistFamily",
            "description": "<p>The Code of MemberList was exist</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "   HTTP/1.1 200 OK\n   {\n\t\t[{code=Restaurant_Code, members=(Member_code), (Member_code), (Member_code) , change_name=ImageChangeName}]   \n   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/LeeYura/git/samsamohoh/src/main/java/ex2i/kr/samsamohoh/controller/FamilyController.java",
    "groupTitle": "Main"
  },
  {
    "type": "post",
    "url": "/doGetMembersNameAjax",
    "title": "[MemberNameList]",
    "version": "0.1.0",
    "name": "MemberNameList",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "MEMBER_CODE",
            "description": "<p>Users unique CODE</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ExistMember",
            "description": "<p>The Name of MemberList was exist</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "   HTTP/1.1 200 OK\n   {\n\t\t[{name=Member_name}]\t \n   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/LeeYura/git/samsamohoh/src/main/java/ex2i/kr/samsamohoh/controller/FamilyController.java",
    "groupTitle": "Main"
  },
  {
    "type": "post",
    "url": "/doGetListRestaurantPageAjax",
    "title": "[RestaurantList]",
    "version": "0.1.0",
    "name": "RestaurantList",
    "group": "Main",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ExistRestaurant",
            "description": "<p>The restaurantsInfo was exist</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n [{\n  code = Restaurant Code,\n   change_name = Image Change Name,\n   name = Restaurant Name,\n   real_name = Image Real Name,\n   member_code = Member Code\n }]  \n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/LeeYura/git/samsamohoh/src/main/java/ex2i/kr/samsamohoh/controller/RestaurantController.java",
    "groupTitle": "Main"
  },
  {
    "type": "post",
    "url": "/doSearchRestaurantAjax",
    "title": "[SearchRestaurant]",
    "version": "0.1.0",
    "name": "SearchRestaurant",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SEARCH_WORD",
            "description": "<p>search words(restaurant name, tag, menu)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "SearchRestaurant",
            "description": "<p>searchResult</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n\t[{\n\t\tfile_path=C:\\wrokspace\\..., \n\t\tcode=Restaurant_code, \n\t\tchange_name=ImageChangeName, \n\t\tmembers=(Member_code), (Member_code), (Member_code), \n\t\tname=Restaurant_name\n\t]}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/LeeYura/git/samsamohoh/src/main/java/ex2i/kr/samsamohoh/controller/FamilyController.java",
    "groupTitle": "Main"
  },
  {
    "type": "post",
    "url": "/doMoveButtonClickAjax",
    "title": "[TransfetFamily]",
    "version": "0.1.0",
    "name": "TransfetFamily",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "RESTAURNAT_CODE",
            "description": "<p>Restaurants unique CODE</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "MEMBER_CODE",
            "description": "<p>Users unique CODE</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ExistFamily",
            "description": "<p>The TransfetFamily was exist</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n \tweb - \"1\"\n \tapp - \"true\" \n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/LeeYura/git/samsamohoh/src/main/java/ex2i/kr/samsamohoh/controller/FamilyController.java",
    "groupTitle": "Main"
  },
  {
    "type": "post",
    "url": "/getChartData",
    "title": "[MemberData]",
    "version": "0.1.0",
    "name": "MemberData",
    "group": "MemberAnalysis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Search users ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "meal_type",
            "description": "<p>Search Meal types</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": "<p>Users session ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "FoundMemberData",
            "description": "<p>MemberData was found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n [xx.x, xx.x,,,,,, xx.x]\n or\n []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/LeeYura/git/samsamohoh/src/main/java/ex2i/kr/samsamohoh/controller/MemberAnalysisController.java",
    "groupTitle": "MemberAnalysis"
  },
  {
    "type": "post",
    "url": "/getChartLabel",
    "title": "[MemberLabel]",
    "version": "0.1.0",
    "name": "MemberLabel",
    "group": "MemberAnalysis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Search users ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "meal_type",
            "description": "<p>Search Meal types</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": "<p>Users session ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "FoundMembersName",
            "description": "<p>Members Name was found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n [{\"meal_type\":\"(0,1,2,3)\", \"cnt\"=\"Number\", \"name\"=\"Name\", \"id\"=\"ID\"},,,,,{}]\n or\n []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/LeeYura/git/samsamohoh/src/main/java/ex2i/kr/samsamohoh/controller/MemberAnalysisController.java",
    "groupTitle": "MemberAnalysis"
  },
  {
    "type": "post",
    "url": "/getMemberName",
    "title": "[MemberName]",
    "version": "0.1.0",
    "name": "MemberName",
    "group": "MemberAnalysis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "FoundMembersName",
            "description": "<p>Members Name was found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n {\"code\":\"member's code\",\"grade\":\"user or admin\",\"id\":\"ID\"\"name\":\"Name\",\"reg_date\":\"date\",\"state\":\"Y or N\"}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/LeeYura/git/samsamohoh/src/main/java/ex2i/kr/samsamohoh/controller/MemberAnalysisController.java",
    "groupTitle": "MemberAnalysis"
  },
  {
    "type": "post",
    "url": "/memberdelete",
    "title": "[MemberDelete]",
    "version": "0.1.0",
    "name": "MemberDelete",
    "group": "Member",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "memberCode",
            "description": "<p>Users unique CODE.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "searchNm",
            "description": "<p>search key word(id, name)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>current Page</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "DeleteMember",
            "description": "<p>Member was delete.</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "FoundMemberList",
            "description": "<p>MemberList was found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n {\"code\":\"members code\",\"grade\":\"user or admin\",\"id\":\"ID\"\"name\":\"Name\",\"reg_date\":\"date\",\"state\":\"Y or N\"}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/LeeYura/git/samsamohoh/src/main/java/ex2i/kr/samsamohoh/controller/MemberMgrController.java",
    "groupTitle": "Member"
  },
  {
    "type": "post",
    "url": "/memberListAjax",
    "title": "[MemberList]",
    "version": "0.1.0",
    "name": "MemberList",
    "group": "Member",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "searchNm",
            "description": "<p>search key word(id, name)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>current Page</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "FoundMemberList",
            "description": "<p>MemberList was found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n {\"code\":\"members code\",\"grade\":\"user or admin\",\"id\":\"ID\"\"name\":\"Name\",\"reg_date\":\"date\",\"state\":\"Y or N\"}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/LeeYura/git/samsamohoh/src/main/java/ex2i/kr/samsamohoh/controller/MemberMgrController.java",
    "groupTitle": "Member"
  },
  {
    "type": "post",
    "url": "/getPriceData",
    "title": "[PriceData]",
    "version": "0.1.0",
    "name": "PriceData",
    "group": "PayAnalysis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Search users ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "meal_type",
            "description": "<p>Search Meal types</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "searchYear",
            "description": "<p>search year ('YYYY')</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "searchMonth",
            "description": "<p>search month ('MM')</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "FoundPriceData",
            "description": "<p>PriceData was found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n [{\"meal_type\":\"(0,1,2,3)\", \"price\"=\"xx000\", \"settling_date\"=\"date\", \"id\"=\"ID\"},,,,{}]\n or\n []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/LeeYura/git/samsamohoh/src/main/java/ex2i/kr/samsamohoh/controller/PayMgrController.java",
    "groupTitle": "PayAnalysis"
  },
  {
    "type": "post",
    "url": "/getPriceLabel",
    "title": "[PriceLabel]",
    "version": "0.1.0",
    "name": "PriceLabel",
    "group": "PayAnalysis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Search users ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "meal_type",
            "description": "<p>Search Meal types</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "searchYear",
            "description": "<p>search year ('YYYY')</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "searchMonth",
            "description": "<p>search month ('MM')</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "FoundPriceLabel",
            "description": "<p>Price Label was found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n [점심, 저녁]\n or\n []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/LeeYura/git/samsamohoh/src/main/java/ex2i/kr/samsamohoh/controller/PayMgrController.java",
    "groupTitle": "PayAnalysis"
  },
  {
    "type": "post",
    "url": "/findMemberName",
    "title": "[AddMember]",
    "version": "0.1.0",
    "name": "AddMember",
    "group": "Receipt",
    "description": "<p>If you access from the android must have access to the token value.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "member_name",
            "description": "<p>Members Name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "FindMember",
            "description": "<p>Member Name was exist</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n    {\n    \t{\"code\":\"Member Code\",\"id\":null,\"name\":\"Member Name\",\"reg_date\":null,\"state\":null,\"grade\":null}\n\t\t  or\n    \t{\"code\":\"no Have Member Code\",\"id\":null,\"name\":null,\"reg_date\":null,\"state\":null,\"grade\":null}\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/LeeYura/git/samsamohoh/src/main/java/ex2i/kr/samsamohoh/controller/ReceiptMgrController.java",
    "groupTitle": "Receipt"
  },
  {
    "type": "post",
    "url": "/addReceipt",
    "title": "[AddReceipt]",
    "version": "0.1.0",
    "name": "AddReceipt",
    "group": "Receipt",
    "description": "<p>If you access from the android must have access to the token value.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "List",
            "optional": false,
            "field": "realMember",
            "description": "<p>Of the participants(Members) unique CODE</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "card_type",
            "description": "<p>Cards type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "meal_type",
            "description": "<p>Meals type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "etc",
            "description": "<p>Other Description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "restaurant_code",
            "description": "<p>Restaurants unique CODE</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "total_price",
            "description": "<p>The total amount used</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "settling_date",
            "description": "<p>Payment Date ('YYYY-MM-DD')</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "card_no",
            "description": "<p>Rear four-digit card number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reg_code",
            "description": "<p>Users unique CODE</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "AddReceipt",
            "description": "<p>Receipt add success</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t{\"restaurant_code\":\"Restaurant Code\",\"memberList\":\"Member Code,Member Code,Member Code\",\n\t\t \"card_no\":\"Number\",\"total_price\":\"xx000\",\"month\":\"Date\",\"meal_type\":\"(0,1)\",\"etc\":\"\",\n\t\t \"year\":\"Date\",\"settling_date\":\"Date\",\"card_type\":\"Number\",\"day\":\"Date\",\"reg_code\":\"Member Code\"}\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/LeeYura/git/samsamohoh/src/main/java/ex2i/kr/samsamohoh/controller/ReceiptMgrController.java",
    "groupTitle": "Receipt"
  },
  {
    "type": "post",
    "url": "/getFamilyMembers",
    "title": "[GetFmilyMember]",
    "version": "0.1.0",
    "name": "GetFmilyMember",
    "group": "Receipt",
    "description": "<p>If you access from the android must have access to the token value.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "searchDate",
            "description": "<p>Search date 'YYYY-MM-DD'</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "GetFmilyMember",
            "description": "<p>Family Members was exist</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n {\"code\":\"Member Code\",\n  \"r_code\":\"Restaurant Code\",\n  \"r_name\":\"Restaurant Name\",\n  \"list\":[{\"code\":\"Restaurant Code\",\"family_seq\":Family Number,\"member_code\":\"Member Code\",\n           \"restaurantName\":\"Restaurant Name\",\"name\":\"Member Name\"}]}\n  or\n  {\"code\":\"Member Code\",\"r_code\":\"\",\"list\":[],\"r_name\":\"\"}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/LeeYura/git/samsamohoh/src/main/java/ex2i/kr/samsamohoh/controller/ReceiptMgrController.java",
    "groupTitle": "Receipt"
  },
  {
    "type": "post",
    "url": "/findRestaurantName",
    "title": "[ModifyRestaurant]",
    "version": "0.1.0",
    "name": "ModifyRestaurant",
    "group": "Receipt",
    "description": "<p>If you access from the android must have access to the token value.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "restaurant_name",
            "description": "<p>Restaurants Name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "FindRestaurant",
            "description": "<p>Restaurant Name was exist</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n    {\n    \t{\"code\":\"Restaurant Code\",\"menu\":null,\"name\":\"Restaurant Name\",\"reg_id\":null,\"reg_date\":null,\"tag\":null,\"use_yn\":null,\"update_id\":null,\"update_date\":null,\"imageVO\":null}\n\t\t  or\n    \t{\"code\":\"no Have Restaurant Code\",\"menu\":null,\"name\":\"Restaurant Name\",\"reg_id\":null,\"reg_date\":null,\"tag\":null,\"use_yn\":null,\"update_id\":null,\"update_date\":null,\"imageVO\":null}\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/LeeYura/git/samsamohoh/src/main/java/ex2i/kr/samsamohoh/controller/ReceiptMgrController.java",
    "groupTitle": "Receipt"
  },
  {
    "type": "post",
    "url": "/receiptListAjax",
    "title": "[ReceiptList]",
    "version": "0.1.0",
    "name": "ReceiptList",
    "group": "Receipt",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "searchYear",
            "description": "<p>search year ('YYYY')</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "searchMonth",
            "description": "<p>search month ('MM')</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>current Page</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "FoundReceiptList",
            "description": "<p>ReceiptList was found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n [{\"total_price\":xx000,\"meal_type\":(0,1,2,3),\"etc\":\"\",\"cnt\":Number,\"settling_date\":\"date\",\"pay_seq\":Number},,{}]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/LeeYura/git/samsamohoh/src/main/java/ex2i/kr/samsamohoh/controller/ReceiptMgrController.java",
    "groupTitle": "Receipt"
  },
  {
    "type": "post",
    "url": "/receiptModify",
    "title": "[ReceiptModify]",
    "version": "0.1.0",
    "name": "receiptModify",
    "group": "Receipt",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "seq",
            "description": "<p>receipts unique Number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mealType",
            "description": "<p>change mealTypes</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "searchYear",
            "description": "<p>search year ('YYYY')</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "searchMonth",
            "description": "<p>search month ('MM')</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>current Page</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ModifyReceipt",
            "description": "<p>Receipt was modify</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "FoundReceiptList",
            "description": "<p>ReceiptList was found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n\t[{\"total_price\":xx000,\"meal_type\":(0,1,2,3),\"etc\":\"\",\n   \"cnt\":Number,\"settling_date\":\"date\",\"pay_seq\":Number},,{}]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/LeeYura/git/samsamohoh/src/main/java/ex2i/kr/samsamohoh/controller/ReceiptMgrController.java",
    "groupTitle": "Receipt"
  },
  {
    "type": "post",
    "url": "/doDeleteRestaurantReplyAjax",
    "title": "[DeleteReply]",
    "version": "0.1.0",
    "name": "DeleteReply",
    "group": "Reply",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CODE",
            "description": "<p>Restaurants unique CODE</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SEQ",
            "description": "<p>Reply unique SEQ</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ExistRestaurantReply",
            "description": "<p>The RegisterReply was exist</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n\t\tweb - \"1\"\n \tapp - \"true\" \n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/LeeYura/git/samsamohoh/src/main/java/ex2i/kr/samsamohoh/controller/RestaurantController.java",
    "groupTitle": "Reply"
  },
  {
    "type": "post",
    "url": "/doSetRestaurantReplyAjax",
    "title": "[RegisterReply]",
    "version": "0.1.0",
    "name": "RegisterReply",
    "group": "Reply",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CODE",
            "description": "<p>Restaurants unique CODE</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CONTENT",
            "description": "<p>Reply CONTENT</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ExistRestaurantReply",
            "description": "<p>The RegisterReply was exist</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n\t\tweb - \"1\"\n \tapp - \"true\" \n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/LeeYura/git/samsamohoh/src/main/java/ex2i/kr/samsamohoh/controller/RestaurantController.java",
    "groupTitle": "Reply"
  },
  {
    "type": "post",
    "url": "/doGetRestaurantReplyAjax",
    "title": "[ReplyList]",
    "version": "0.1.0",
    "name": "ReplyList",
    "group": "Reply",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CODE",
            "description": "<p>Restaurants unique CODE</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ExistRestaurantReply",
            "description": "<p>The Reply was exist</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n    {\n    \t[{\n    \t\tcontent=Reply Content,\n\t\t\t\tid=Member ID,\n\t\t\t\treg_code=Member Code,\n\t\t\t\tname=Member Name,\n\t\t\t\trestaurant_code=null,\n\t\t\t\twrite_date=Date,\n\t\t\t\tseq=Number\n    \t]}\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/LeeYura/git/samsamohoh/src/main/java/ex2i/kr/samsamohoh/controller/RestaurantController.java",
    "groupTitle": "Reply"
  },
  {
    "type": "post",
    "url": "/doAddRestaurant",
    "title": "[AddRestaurant]",
    "version": "0.1.0",
    "name": "AddRestarurant",
    "group": "Restarurant",
    "description": "<p>If you access from the android must have access to the token value.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reg_id",
            "description": "<p>Users unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "restaurantName",
            "description": "<p>add restaurant naming</p>"
          },
          {
            "group": "Parameter",
            "type": "MultipartFile",
            "optional": false,
            "field": "restaurantImage",
            "description": "<p>restaurant use image</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "restaurantMenu",
            "description": "<p>restaurant menu</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "restaurantTag",
            "description": "<p>restaurant related tags</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>intro web or app</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ExistRestaurant",
            "description": "<p>The restaurantsList was exist</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n web - \"redirect:/detailRestaurant\"\n app - \"true\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/LeeYura/git/samsamohoh/src/main/java/ex2i/kr/samsamohoh/controller/RestaurantPageController.java",
    "groupTitle": "Restarurant"
  },
  {
    "type": "get",
    "url": "/deleteRestaurant",
    "title": "[DeleteRestaurant]",
    "version": "0.1.0",
    "name": "DeleteRestaurant",
    "group": "Restarurant",
    "description": "<p>If you access from the android must have access to the token value.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CODE",
            "description": "<p>Users unique CODE.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>intro web or app</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ExistRestaurant",
            "description": "<p>The restaurantsList was exist</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n web - \"restaurant/main\"\n app - \"true\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/LeeYura/git/samsamohoh/src/main/java/ex2i/kr/samsamohoh/controller/RestaurantPageController.java",
    "groupTitle": "Restarurant"
  },
  {
    "type": "post",
    "url": "/doModifyRestaurantPage",
    "title": "[ModifyRestaurant]",
    "version": "0.1.0",
    "name": "ModifyRestarurant",
    "group": "Restarurant",
    "description": "<p>If you access from the android must have access to the token value.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CODE",
            "description": "<p>Restaurnats unique CODE</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "restaurantName",
            "description": "<p>add restaurant naming</p>"
          },
          {
            "group": "Parameter",
            "type": "MultipartFile",
            "optional": false,
            "field": "restaurantImage",
            "description": "<p>restaurant use image</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "originalImage",
            "description": "<p>imageFile original name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "restaurantMenu",
            "description": "<p>restaurant menu</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "restaurantTag",
            "description": "<p>restaurant related tags</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "restaurantUse_Yn",
            "description": "<p>Whether operating a restaurant</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "update_id",
            "description": "<p>Users unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>intro web or app</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ExistRestaurant",
            "description": "<p>The restaurantsList was exist</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n web - \"redirect:/detailRestaurant\"\n app - \"true\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/LeeYura/git/samsamohoh/src/main/java/ex2i/kr/samsamohoh/controller/RestaurantPageController.java",
    "groupTitle": "Restarurant"
  },
  {
    "type": "post",
    "url": "/getRChartData",
    "title": "[RestaurantsData]",
    "version": "0.1.0",
    "name": "RestaurantsData",
    "group": "RestaurantAnalysis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Search users ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "meal_type",
            "description": "<p>Search Meal types</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": "<p>Users session ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "grade",
            "description": "<p>Users GRADE.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "FoundRestaurantsData",
            "description": "<p>RestaurantsData was found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n [xx.x, xx.x,,,,,, xx.x]\n or\n []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/LeeYura/git/samsamohoh/src/main/java/ex2i/kr/samsamohoh/controller/RestaurantAnalysisController.java",
    "groupTitle": "RestaurantAnalysis"
  },
  {
    "type": "post",
    "url": "/getRchartLabel",
    "title": "[RestaurantsLabel]",
    "version": "0.1.0",
    "name": "RestaurantsLabel",
    "group": "RestaurantAnalysis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Search users ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "meal_type",
            "description": "<p>Search Meal types</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": "<p>Users session ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "grade",
            "description": "<p>Users GRADE.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "FoundRestaurantsLabel",
            "description": "<p>RestaurantsLabel was found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n [{\"meal_type\":\"(0,1,2,3)\", \"name\":\"RestaurantName\", \"cnt\":\"Number\", \"id\":\"ID\"},,,,{}]\n or\n []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/LeeYura/git/samsamohoh/src/main/java/ex2i/kr/samsamohoh/controller/RestaurantAnalysisController.java",
    "groupTitle": "RestaurantAnalysis"
  },
  {
    "type": "post",
    "url": "/doDetailRestaurantAjax",
    "title": "[ModifyRestaurantInfo]",
    "version": "0.1.0",
    "name": "ModifyRestarurantInfo",
    "group": "Restaurant",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CODE",
            "description": "<p>Restaurants unique CODE</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "ExistRestaurant",
            "description": "<p>The restaurantsInfo was exist</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n {\"restaurant\":[{\"code\":\"Restaurant Code\",\n                     \"menu\":\"Restaurant Menu\",\n                     \"name\":\"Restaurant Name\",\n                     \"reg_id\":\"writer\",\n                     \"reg_date\":\"YYYY-MM-DD HH:mm\",\n                     \"tag\":\"Tags\",\n                     \"use_yn\":\"Y or N\",\n                     \"update_id\":\"\",\n                     \"update_date\":\"YYYY-MM-DD HH:mm:ss.0\",\n                     \"imageVO\":{\"seq\":Number,\n                                \"real_name\":\"file.jpg\",\n                                \"change_name\":\"prefix-file.jpg\",\n                                \"file_path\":\"filePath\",\n                                \"reg_date\":\"YYYY-MM-DD HH:mm:ss.0\",\n                                \"code\":\"Restaurant Code\"}}]}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/LeeYura/git/samsamohoh/src/main/java/ex2i/kr/samsamohoh/controller/RestaurantController.java",
    "groupTitle": "Restaurant"
  },
  {
    "type": "get",
    "url": "/memberAnalysis",
    "title": "[MemberAnalysis]",
    "version": "0.1.0",
    "name": "MemberAnalysis",
    "group": "WebView",
    "description": "<p>If you access from the android must have access to the token value.</p>",
    "filename": "C:/Users/LeeYura/git/samsamohoh/src/main/java/ex2i/kr/samsamohoh/controller/PageController.java",
    "groupTitle": "WebView"
  },
  {
    "type": "get",
    "url": "/restaurntAnalysis",
    "title": "[RestaurantAnalysis]",
    "version": "0.1.0",
    "name": "RestaurantAnalysis",
    "group": "WebView",
    "description": "<p>If you access from the android must have access to the token value.</p>",
    "filename": "C:/Users/LeeYura/git/samsamohoh/src/main/java/ex2i/kr/samsamohoh/controller/PageController.java",
    "groupTitle": "WebView"
  },
  {
    "type": "get",
    "url": "/detailRestaurant",
    "title": "[detailRestaurant]",
    "version": "0.1.0",
    "name": "detailRestaurant",
    "group": "WebView",
    "description": "<p>If you access from the android must have access to the token value.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CODE",
            "description": "<p>Users unique CODE.</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/LeeYura/git/samsamohoh/src/main/java/ex2i/kr/samsamohoh/controller/RestaurantPageController.java",
    "groupTitle": "WebView"
  }
] });
