__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 27,
                      "end": 30
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 36,
                            "end": 42
                          },
                          "start": 34,
                          "end": 42
                        },
                        "start": 31,
                        "end": 42
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 45,
                        "end": 49
                      },
                      "start": 43,
                      "end": 49
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 27,
                    "end": 50
                  }
                ],
                "start": 21,
                "end": 52
              },
              "start": 19,
              "end": 52
            },
            "start": 12,
            "end": 52
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 52
        }
      ],
      "declare": true,
      "start": 0,
      "end": 52
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MultiSkilledRobot",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 75
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 79,
            "end": 85
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSStringKeyword",
                "start": 88,
                "end": 94
              },
              {
                "type": "TSStringKeyword",
                "start": 96,
                "end": 102
              }
            ],
            "start": 87,
            "end": 103
          }
        ],
        "start": 78,
        "end": 104
      },
      "declare": false,
      "start": 53,
      "end": 105
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
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiSkilledRobot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 123,
                  "end": 140
                },
                "typeArguments": null,
                "start": 123,
                "end": 140
              },
              "start": 121,
              "end": 140
            },
            "start": 110,
            "end": 140
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "mower",
                "raw": "\"mower\"",
                "start": 144,
                "end": 151
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "mowing",
                    "raw": "\"mowing\"",
                    "start": 154,
                    "end": 162
                  },
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 164,
                    "end": 166
                  }
                ],
                "start": 153,
                "end": 167
              }
            ],
            "start": 143,
            "end": 168
          },
          "definite": false,
          "start": 110,
          "end": 168
        }
      ],
      "declare": false,
      "start": 106,
      "end": 169
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
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiSkilledRobot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 187,
                  "end": 204
                },
                "typeArguments": null,
                "start": 187,
                "end": 204
              },
              "start": 185,
              "end": 204
            },
            "start": 174,
            "end": 204
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "trimmer",
                "raw": "\"trimmer\"",
                "start": 208,
                "end": 217
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "trimming",
                    "raw": "\"trimming\"",
                    "start": 220,
                    "end": 230
                  },
                  {
                    "type": "Literal",
                    "value": "edging",
                    "raw": "\"edging\"",
                    "start": 232,
                    "end": 240
                  }
                ],
                "start": 219,
                "end": 241
              }
            ],
            "start": 207,
            "end": 242
          },
          "definite": false,
          "start": 174,
          "end": 242
        }
      ],
      "declare": false,
      "start": 170,
      "end": 243
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              null,
              {
                "type": "Identifier",
                "decorators": [],
                "name": "skillA",
                "optional": false,
                "typeAnnotation": null,
                "start": 252,
                "end": 258
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 249,
            "end": 259
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 262,
            "end": 273
          },
          "definite": false,
          "start": 249,
          "end": 273
        }
      ],
      "declare": false,
      "start": 245,
      "end": 274
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nameMB",
                "optional": false,
                "typeAnnotation": null,
                "start": 280,
                "end": 286
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 279,
            "end": 287
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 290,
            "end": 301
          },
          "definite": false,
          "start": 279,
          "end": 301
        }
      ],
      "declare": false,
      "start": 275,
      "end": 302
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nameMA",
                "optional": false,
                "typeAnnotation": null,
                "start": 308,
                "end": 314
              },
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "primarySkillA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 317,
                    "end": 330
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "secondarySkillA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 332,
                    "end": 347
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 316,
                "end": 348
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 307,
            "end": 349
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 352,
            "end": 363
          },
          "definite": false,
          "start": 307,
          "end": 363
        }
      ],
      "declare": false,
      "start": 303,
      "end": 364
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nameMC",
                "optional": false,
                "typeAnnotation": null,
                "start": 371,
                "end": 377
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 370,
            "end": 378
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "roomba",
                "raw": "\"roomba\"",
                "start": 382,
                "end": 390
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "vacuum",
                    "raw": "\"vacuum\"",
                    "start": 393,
                    "end": 401
                  },
                  {
                    "type": "Literal",
                    "value": "mopping",
                    "raw": "\"mopping\"",
                    "start": 403,
                    "end": 412
                  }
                ],
                "start": 392,
                "end": 413
              }
            ],
            "start": 381,
            "end": 414
          },
          "definite": false,
          "start": 370,
          "end": 414
        }
      ],
      "declare": false,
      "start": 366,
      "end": 415
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nameMC2",
                "optional": false,
                "typeAnnotation": null,
                "start": 421,
                "end": 428
              },
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "primarySkillC",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 431,
                    "end": 444
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "secondarySkillC",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 446,
                    "end": 461
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 430,
                "end": 462
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 420,
            "end": 463
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "roomba",
                "raw": "\"roomba\"",
                "start": 467,
                "end": 475
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "vacuum",
                    "raw": "\"vacuum\"",
                    "start": 478,
                    "end": 486
                  },
                  {
                    "type": "Literal",
                    "value": "mopping",
                    "raw": "\"mopping\"",
                    "start": 488,
                    "end": 497
                  }
                ],
                "start": 477,
                "end": 498
              }
            ],
            "start": 466,
            "end": 499
          },
          "definite": false,
          "start": 420,
          "end": 499
        }
      ],
      "declare": false,
      "start": 416,
      "end": 500
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "multiRobotAInfo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 510,
                  "end": 525
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 507,
                "end": 525
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 506,
            "end": 526
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 529,
            "end": 540
          },
          "definite": false,
          "start": 506,
          "end": 540
        }
      ],
      "declare": false,
      "start": 502,
      "end": 541
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "nameMB",
          "optional": false,
          "typeAnnotation": null,
          "start": 547,
          "end": 553
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "nameMA",
          "optional": false,
          "typeAnnotation": null,
          "start": 557,
          "end": 563
        },
        "start": 547,
        "end": 563
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 571,
                  "end": 578
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 579,
                  "end": 582
                },
                "optional": false,
                "computed": false,
                "start": 571,
                "end": 582
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 583,
                      "end": 589
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 590,
                      "end": 591
                    },
                    "optional": false,
                    "computed": true,
                    "start": 583,
                    "end": 592
                  },
                  "operator": "+",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 595,
                      "end": 601
                    },
                    "property": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 602,
                      "end": 603
                    },
                    "optional": false,
                    "computed": true,
                    "start": 595,
                    "end": 604
                  },
                  "start": 583,
                  "end": 604
                }
              ],
              "optional": false,
              "start": 571,
              "end": 605
            },
            "directive": null,
            "start": 571,
            "end": 606
          }
        ],
        "start": 565,
        "end": 608
      },
      "alternate": null,
      "start": 543,
      "end": 608
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 608
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 12,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 27,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "msg",
    "start": 31,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 45,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 53,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "MultiSkilledRobot",
    "start": 58,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 79,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 88,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 96,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 106,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 110,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "MultiSkilledRobot",
    "start": 123,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 143,
    "end": 144
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 144,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 153,
    "end": 154
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 154,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 162,
    "end": 163
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 164,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 170,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "multiRobotB",
    "start": 174,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "MultiSkilledRobot",
    "start": 187,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 207,
    "end": 208
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 208,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 219,
    "end": 220
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 220,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 230,
    "end": 231
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 232,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 245,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 252,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 262,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 273,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 275,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "nameMB",
    "start": 280,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "multiRobotB",
    "start": 290,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 301,
    "end": 302
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 303,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 308,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 317,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 332,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 352,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 366,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "nameMC",
    "start": 371,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 381,
    "end": 382
  },
  {
    "type": "String",
    "value": "\"roomba\"",
    "start": 382,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 392,
    "end": 393
  },
  {
    "type": "String",
    "value": "\"vacuum\"",
    "start": 393,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 401,
    "end": 402
  },
  {
    "type": "String",
    "value": "\"mopping\"",
    "start": 403,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 414,
    "end": 415
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 416,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "nameMC2",
    "start": 421,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "primarySkillC",
    "start": 431,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "secondarySkillC",
    "start": 446,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 466,
    "end": 467
  },
  {
    "type": "String",
    "value": "\"roomba\"",
    "start": 467,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 477,
    "end": 478
  },
  {
    "type": "String",
    "value": "\"vacuum\"",
    "start": 478,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 486,
    "end": 487
  },
  {
    "type": "String",
    "value": "\"mopping\"",
    "start": 488,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 499,
    "end": 500
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 502,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 507,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "multiRobotAInfo",
    "start": 510,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 529,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 540,
    "end": 541
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 543,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "nameMB",
    "start": 547,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 554,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 557,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 571,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 579,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 583,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 589,
    "end": 590
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 595,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 601,
    "end": 602
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 607,
    "end": 608
  }
]
```
