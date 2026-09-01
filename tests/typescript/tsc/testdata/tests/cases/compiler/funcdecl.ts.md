__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "simpleFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 19
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "this is my simple func",
              "raw": "\"this is my simple func\"",
              "start": 35,
              "end": 59
            },
            "start": 28,
            "end": 60
          }
        ],
        "start": 22,
        "end": 62
      },
      "expression": false,
      "start": 0,
      "end": 62
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "simpleFuncVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 80
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "simpleFunc",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 93
          },
          "definite": false,
          "start": 67,
          "end": 93
        }
      ],
      "declare": false,
      "start": 63,
      "end": 94
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "anotherFuncNoReturn",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 124
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 127,
        "end": 130
      },
      "expression": false,
      "start": 96,
      "end": 130
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "anotherFuncNoReturnVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 135,
            "end": 157
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "anotherFuncNoReturn",
            "optional": false,
            "typeAnnotation": null,
            "start": 160,
            "end": 179
          },
          "definite": false,
          "start": 135,
          "end": 179
        }
      ],
      "declare": false,
      "start": 131,
      "end": 180
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withReturn",
        "optional": false,
        "typeAnnotation": null,
        "start": 191,
        "end": 201
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 206,
          "end": 212
        },
        "start": 204,
        "end": 212
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "Hello",
              "raw": "\"Hello\"",
              "start": 225,
              "end": 232
            },
            "start": 218,
            "end": 233
          }
        ],
        "start": 212,
        "end": 235
      },
      "expression": false,
      "start": 182,
      "end": 235
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "withReturnVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 240,
            "end": 253
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "withReturn",
            "optional": false,
            "typeAnnotation": null,
            "start": 256,
            "end": 266
          },
          "definite": false,
          "start": 240,
          "end": 266
        }
      ],
      "declare": false,
      "start": 236,
      "end": 267
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withParams",
        "optional": false,
        "typeAnnotation": null,
        "start": 278,
        "end": 288
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 293,
              "end": 299
            },
            "start": 291,
            "end": 299
          },
          "start": 289,
          "end": 299
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 303,
          "end": 309
        },
        "start": 301,
        "end": 309
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 322,
              "end": 323
            },
            "start": 315,
            "end": 324
          }
        ],
        "start": 309,
        "end": 326
      },
      "expression": false,
      "start": 269,
      "end": 326
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "withparamsVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 331,
            "end": 344
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "withParams",
            "optional": false,
            "typeAnnotation": null,
            "start": 347,
            "end": 357
          },
          "definite": false,
          "start": 331,
          "end": 357
        }
      ],
      "declare": false,
      "start": 327,
      "end": 358
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withMultiParams",
        "optional": false,
        "typeAnnotation": null,
        "start": 369,
        "end": 384
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 389,
              "end": 395
            },
            "start": 387,
            "end": 395
          },
          "start": 385,
          "end": 395
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 397,
          "end": 398
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 403,
                "end": 409
              },
              "typeArguments": null,
              "start": 403,
              "end": 409
            },
            "start": 401,
            "end": 409
          },
          "start": 400,
          "end": 409
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 424,
              "end": 425
            },
            "start": 417,
            "end": 426
          }
        ],
        "start": 411,
        "end": 428
      },
      "expression": false,
      "start": 360,
      "end": 428
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "withMultiParamsVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 433,
            "end": 451
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "withMultiParams",
            "optional": false,
            "typeAnnotation": null,
            "start": 454,
            "end": 469
          },
          "definite": false,
          "start": 433,
          "end": 469
        }
      ],
      "declare": false,
      "start": 429,
      "end": 470
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withOptionalParams",
        "optional": false,
        "typeAnnotation": null,
        "start": 481,
        "end": 499
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 504,
              "end": 510
            },
            "start": 502,
            "end": 510
          },
          "start": 500,
          "end": 510
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 512,
        "end": 515
      },
      "expression": false,
      "start": 472,
      "end": 515
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "withOptionalParamsVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 520,
            "end": 541
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "withOptionalParams",
            "optional": false,
            "typeAnnotation": null,
            "start": 544,
            "end": 562
          },
          "definite": false,
          "start": 520,
          "end": 562
        }
      ],
      "declare": false,
      "start": 516,
      "end": 563
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withInitializedParams",
        "optional": false,
        "typeAnnotation": null,
        "start": 574,
        "end": 595
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 599,
              "end": 605
            },
            "start": 597,
            "end": 605
          },
          "start": 596,
          "end": 605
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b0",
          "optional": false,
          "typeAnnotation": null,
          "start": 607,
          "end": 609
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 611,
            "end": 612
          },
          "right": {
            "type": "Literal",
            "value": 30,
            "raw": "30",
            "start": 615,
            "end": 617
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 611,
          "end": 617
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 619,
            "end": 620
          },
          "right": {
            "type": "Literal",
            "value": "string value",
            "raw": "\"string value\"",
            "start": 623,
            "end": 637
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 619,
          "end": 637
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 639,
        "end": 642
      },
      "expression": false,
      "start": 565,
      "end": 642
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "withInitializedParamsVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 647,
            "end": 671
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "withInitializedParams",
            "optional": false,
            "typeAnnotation": null,
            "start": 674,
            "end": 695
          },
          "definite": false,
          "start": 647,
          "end": 695
        }
      ],
      "declare": false,
      "start": 643,
      "end": 696
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withOptionalInitializedParams",
        "optional": false,
        "typeAnnotation": null,
        "start": 707,
        "end": 736
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 740,
              "end": 746
            },
            "start": 738,
            "end": 746
          },
          "start": 737,
          "end": 746
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 751,
                "end": 757
              },
              "start": 749,
              "end": 757
            },
            "start": 748,
            "end": 757
          },
          "right": {
            "type": "Literal",
            "value": "hello string",
            "raw": "\"hello string\"",
            "start": 760,
            "end": 774
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 748,
          "end": 774
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 776,
        "end": 779
      },
      "expression": false,
      "start": 698,
      "end": 779
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "withOptionalInitializedParamsVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 784,
            "end": 816
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "withOptionalInitializedParams",
            "optional": false,
            "typeAnnotation": null,
            "start": 819,
            "end": 848
          },
          "definite": false,
          "start": 784,
          "end": 848
        }
      ],
      "declare": false,
      "start": 780,
      "end": 849
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withRestParams",
        "optional": false,
        "typeAnnotation": null,
        "start": 860,
        "end": 874
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 878,
              "end": 884
            },
            "start": 876,
            "end": 884
          },
          "start": 875,
          "end": 884
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "myRestParameter",
            "optional": false,
            "typeAnnotation": null,
            "start": 890,
            "end": 905
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 908,
                "end": 914
              },
              "start": 908,
              "end": 916
            },
            "start": 906,
            "end": 916
          },
          "value": null,
          "start": 886,
          "end": 916
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "myRestParameter",
              "optional": false,
              "typeAnnotation": null,
              "start": 931,
              "end": 946
            },
            "start": 924,
            "end": 947
          }
        ],
        "start": 918,
        "end": 949
      },
      "expression": false,
      "start": 851,
      "end": 949
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "withRestParamsVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 954,
            "end": 971
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "withRestParams",
            "optional": false,
            "typeAnnotation": null,
            "start": 974,
            "end": 988
          },
          "definite": false,
          "start": 954,
          "end": 988
        }
      ],
      "declare": false,
      "start": 950,
      "end": 989
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overload1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1000,
        "end": 1009
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1013,
              "end": 1019
            },
            "start": 1011,
            "end": 1019
          },
          "start": 1010,
          "end": 1019
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 1023,
          "end": 1029
        },
        "start": 1021,
        "end": 1029
      },
      "body": null,
      "expression": false,
      "start": 991,
      "end": 1030
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overload1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1040,
        "end": 1049
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1053,
              "end": 1059
            },
            "start": 1051,
            "end": 1059
          },
          "start": 1050,
          "end": 1059
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 1063,
          "end": 1069
        },
        "start": 1061,
        "end": 1069
      },
      "body": null,
      "expression": false,
      "start": 1031,
      "end": 1070
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overload1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1080,
        "end": 1089
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ns",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1094,
              "end": 1097
            },
            "start": 1092,
            "end": 1097
          },
          "start": 1090,
          "end": 1097
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ns",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1112,
                  "end": 1114
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1115,
                  "end": 1123
                },
                "optional": false,
                "computed": false,
                "start": 1112,
                "end": 1123
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1112,
              "end": 1125
            },
            "start": 1105,
            "end": 1126
          }
        ],
        "start": 1099,
        "end": 1128
      },
      "expression": false,
      "start": 1071,
      "end": 1128
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "withOverloadSignature",
            "optional": false,
            "typeAnnotation": null,
            "start": 1133,
            "end": 1154
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "overload1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1157,
            "end": 1166
          },
          "definite": false,
          "start": 1133,
          "end": 1166
        }
      ],
      "declare": false,
      "start": 1129,
      "end": 1167
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 1178,
        "end": 1179
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1189,
                  "end": 1193
                },
                "start": 1186,
                "end": 1193
              },
              "start": 1183,
              "end": 1193
            },
            "start": 1181,
            "end": 1193
          },
          "start": 1180,
          "end": 1193
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1195,
        "end": 1198
      },
      "expression": false,
      "start": 1169,
      "end": 1198
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1210,
        "end": 1212
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1235,
                "end": 1238
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1248,
                          "end": 1252
                        },
                        "start": 1245,
                        "end": 1252
                      },
                      "start": 1242,
                      "end": 1252
                    },
                    "start": 1240,
                    "end": 1252
                  },
                  "start": 1239,
                  "end": 1252
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1255,
                "end": 1262
              },
              "expression": false,
              "start": 1226,
              "end": 1262
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1219,
            "end": 1262
          }
        ],
        "start": 1213,
        "end": 1265
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1200,
      "end": 1265
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1267,
            "end": 1269
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1270,
            "end": 1273
          },
          "optional": false,
          "computed": false,
          "start": 1267,
          "end": 1273
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1292,
                        "end": 1293
                      },
                      "init": {
                        "type": "Literal",
                        "value": 30,
                        "raw": "30",
                        "start": 1296,
                        "end": 1298
                      },
                      "definite": false,
                      "start": 1292,
                      "end": 1298
                    }
                  ],
                  "declare": false,
                  "start": 1288,
                  "end": 1299
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1311,
                    "end": 1312
                  },
                  "start": 1304,
                  "end": 1313
                }
              ],
              "start": 1281,
              "end": 1315
            },
            "id": null,
            "generator": false,
            "start": 1274,
            "end": 1315
          }
        ],
        "optional": false,
        "start": 1267,
        "end": 1316
      },
      "directive": null,
      "start": 1267,
      "end": 1317
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fooAmbient",
        "optional": false,
        "typeAnnotation": null,
        "start": 1337,
        "end": 1347
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1351,
              "end": 1357
            },
            "start": 1349,
            "end": 1357
          },
          "start": 1348,
          "end": 1357
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 1360,
          "end": 1366
        },
        "start": 1358,
        "end": 1366
      },
      "body": null,
      "expression": false,
      "start": 1320,
      "end": 1367
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overloadAmbient",
        "optional": false,
        "typeAnnotation": null,
        "start": 1386,
        "end": 1401
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1405,
              "end": 1411
            },
            "start": 1403,
            "end": 1411
          },
          "start": 1402,
          "end": 1411
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 1414,
          "end": 1420
        },
        "start": 1412,
        "end": 1420
      },
      "body": null,
      "expression": false,
      "start": 1369,
      "end": 1421
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overloadAmbient",
        "optional": false,
        "typeAnnotation": null,
        "start": 1439,
        "end": 1454
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1458,
              "end": 1464
            },
            "start": 1456,
            "end": 1464
          },
          "start": 1455,
          "end": 1464
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 1467,
          "end": 1473
        },
        "start": 1465,
        "end": 1473
      },
      "body": null,
      "expression": false,
      "start": 1422,
      "end": 1474
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1480,
            "end": 1482
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 1504,
                    "end": 1512
                  },
                  "start": 1497,
                  "end": 1513
                }
              ],
              "start": 1491,
              "end": 1515
            },
            "id": null,
            "generator": false,
            "start": 1485,
            "end": 1515
          },
          "definite": false,
          "start": 1480,
          "end": 1515
        }
      ],
      "declare": false,
      "start": 1476,
      "end": 1515
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1515
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "simpleFunc",
    "start": 9,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 28,
    "end": 34
  },
  {
    "type": "String",
    "value": "\"this is my simple func\"",
    "start": 35,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 63,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "simpleFuncVar",
    "start": 67,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "simpleFunc",
    "start": 83,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 96,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "anotherFuncNoReturn",
    "start": 105,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 131,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "anotherFuncNoReturnVar",
    "start": 135,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "anotherFuncNoReturn",
    "start": 160,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 182,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "withReturn",
    "start": 191,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 206,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 212,
    "end": 213
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 218,
    "end": 224
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 225,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 234,
    "end": 235
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 236,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "withReturnVar",
    "start": 240,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "withReturn",
    "start": 256,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 269,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "withParams",
    "start": 278,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 293,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 303,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 309,
    "end": 310
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 315,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 325,
    "end": 326
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 327,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "withparamsVar",
    "start": 331,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "withParams",
    "start": 347,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 357,
    "end": 358
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 360,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "withMultiParams",
    "start": 369,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 389,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 403,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 411,
    "end": 412
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 417,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 427,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 429,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "withMultiParamsVar",
    "start": 433,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "withMultiParams",
    "start": 454,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 469,
    "end": 470
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 472,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "withOptionalParams",
    "start": 481,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 504,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 514,
    "end": 515
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 516,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "withOptionalParamsVar",
    "start": 520,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "withOptionalParams",
    "start": 544,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 562,
    "end": 563
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 565,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "withInitializedParams",
    "start": 574,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 599,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "b0",
    "start": 607,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 613,
    "end": 614
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 615,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 621,
    "end": 622
  },
  {
    "type": "String",
    "value": "\"string value\"",
    "start": 623,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 641,
    "end": 642
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 643,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "withInitializedParamsVar",
    "start": 647,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 672,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "withInitializedParams",
    "start": 674,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 695,
    "end": 696
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 698,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "withOptionalInitializedParams",
    "start": 707,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 740,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 751,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 758,
    "end": 759
  },
  {
    "type": "String",
    "value": "\"hello string\"",
    "start": 760,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 778,
    "end": 779
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 780,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "withOptionalInitializedParamsVar",
    "start": 784,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "withOptionalInitializedParams",
    "start": 819,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 848,
    "end": 849
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 851,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "withRestParams",
    "start": 860,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 878,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 886,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "myRestParameter",
    "start": 890,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 906,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 908,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 918,
    "end": 919
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 924,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "myRestParameter",
    "start": 931,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 948,
    "end": 949
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 950,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "withRestParamsVar",
    "start": 954,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "withRestParams",
    "start": 974,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 988,
    "end": 989
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 991,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "overload1",
    "start": 1000,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1013,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1023,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1031,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "overload1",
    "start": 1040,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1053,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1063,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1071,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "overload1",
    "start": 1080,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 1090,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1094,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1105,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 1112,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 1115,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1129,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "withOverloadSignature",
    "start": 1133,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "overload1",
    "start": 1157,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1169,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1186,
    "end": 1188
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1189,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1200,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 1210,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1219,
    "end": 1225
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1226,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1235,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1245,
    "end": 1247
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1248,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 1267,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1270,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1277,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1288,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 1296,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1304,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1320,
    "end": 1327
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1328,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "fooAmbient",
    "start": 1337,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1351,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1360,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1369,
    "end": 1376
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1377,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "overloadAmbient",
    "start": 1386,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1405,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1414,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1422,
    "end": 1429
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1430,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "overloadAmbient",
    "start": 1439,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1458,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1467,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1476,
    "end": 1479
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1480,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1488,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1497,
    "end": 1503
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1504,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1514,
    "end": 1515
  }
]
```
