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
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 171,
                    "end": 173
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 170,
                "end": 174
              },
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 178,
                        "end": 180
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 177,
                    "end": 181
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 176,
                "end": 182
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 169,
            "end": 183
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 186,
            "end": 188
          },
          "definite": false,
          "start": 169,
          "end": 188
        }
      ],
      "declare": false,
      "start": 165,
      "end": 188
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 212,
                    "end": 214
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 211,
                "end": 215
              },
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 219,
                        "end": 221
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 218,
                    "end": 222
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 217,
                "end": 223
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 210,
            "end": 224
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 227,
            "end": 236
          },
          "definite": false,
          "start": 210,
          "end": 236
        }
      ],
      "declare": false,
      "start": 206,
      "end": 236
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
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
                "name": "b0",
                "optional": false,
                "typeAnnotation": null,
                "start": 595,
                "end": 597
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b1",
                "optional": false,
                "typeAnnotation": null,
                "start": 599,
                "end": 601
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null,
                "start": 603,
                "end": 605
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 609,
                    "end": 615
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 617,
                    "end": 624
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 626,
                    "end": 632
                  }
                ],
                "start": 608,
                "end": 633
              },
              "start": 606,
              "end": 633
            },
            "start": 594,
            "end": 633
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 637,
                "end": 638
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 640,
                "end": 641
              },
              {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 643,
                "end": 651
              }
            ],
            "start": 636,
            "end": 652
          },
          "definite": false,
          "start": 594,
          "end": 652
        }
      ],
      "declare": false,
      "start": 590,
      "end": 653
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J",
        "optional": false,
        "typeAnnotation": null,
        "start": 674,
        "end": 675
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 684,
            "end": 689
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Number",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 690,
                  "end": 696
                },
                "typeArguments": null,
                "start": 690,
                "end": 696
              }
            ],
            "start": 689,
            "end": 697
          },
          "start": 684,
          "end": 697
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 704,
              "end": 705
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 707,
                "end": 713
              },
              "start": 705,
              "end": 713
            },
            "accessibility": null,
            "static": false,
            "start": 704,
            "end": 714
          }
        ],
        "start": 698,
        "end": 716
      },
      "declare": false,
      "start": 664,
      "end": 716
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 727,
        "end": 730
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "J",
            "optional": false,
            "typeAnnotation": null,
            "start": 734,
            "end": 735
          },
          "typeArguments": null,
          "start": 734,
          "end": 735
        },
        "start": 732,
        "end": 735
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 751,
                    "end": 757
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 759,
                    "end": 765
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 767,
                    "end": 773
                  }
                ],
                "start": 750,
                "end": 774
              },
              "expression": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 776,
                    "end": 777
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 779,
                    "end": 780
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 782,
                    "end": 783
                  }
                ],
                "start": 775,
                "end": 784
              },
              "start": 749,
              "end": 784
            },
            "start": 742,
            "end": 785
          }
        ],
        "start": 736,
        "end": 787
      },
      "expression": false,
      "start": 718,
      "end": 787
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 793,
                  "end": 795
                },
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 798,
                  "end": 806
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 793,
                "end": 806
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b4",
                "optional": false,
                "typeAnnotation": null,
                "start": 808,
                "end": 810
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b5",
                "optional": false,
                "typeAnnotation": null,
                "start": 812,
                "end": 814
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 792,
            "end": 815
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 818,
              "end": 821
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 818,
            "end": 823
          },
          "definite": false,
          "start": 792,
          "end": 823
        }
      ],
      "declare": false,
      "start": 788,
      "end": 824
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
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 1093,
            "end": 1097
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1101,
                "end": 1102
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1104,
                "end": 1105
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1107,
                "end": 1108
              }
            ],
            "start": 1100,
            "end": 1109
          },
          "definite": false,
          "start": 1093,
          "end": 1109
        }
      ],
      "declare": false,
      "start": 1089,
      "end": 1109
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
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
                "name": "c0",
                "optional": false,
                "typeAnnotation": null,
                "start": 1115,
                "end": 1117
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1119,
                "end": 1121
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 1125,
                    "end": 1131
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1133,
                    "end": 1139
                  }
                ],
                "start": 1124,
                "end": 1140
              },
              "start": 1122,
              "end": 1140
            },
            "start": 1114,
            "end": 1140
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "temp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1147,
                  "end": 1151
                },
                "start": 1144,
                "end": 1151
              }
            ],
            "start": 1143,
            "end": 1152
          },
          "definite": false,
          "start": 1114,
          "end": 1152
        }
      ],
      "declare": false,
      "start": 1110,
      "end": 1153
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
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
                "name": "c2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1169,
                "end": 1171
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1173,
                "end": 1175
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1179,
                    "end": 1185
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 1187,
                    "end": 1193
                  }
                ],
                "start": 1178,
                "end": 1194
              },
              "start": 1176,
              "end": 1194
            },
            "start": 1168,
            "end": 1194
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "temp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1201,
                  "end": 1205
                },
                "start": 1198,
                "end": 1205
              }
            ],
            "start": 1197,
            "end": 1206
          },
          "definite": false,
          "start": 1168,
          "end": 1206
        }
      ],
      "declare": false,
      "start": 1164,
      "end": 1207
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 1229,
        "end": 1230
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "idx",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1243,
                    "end": 1249
                  },
                  "start": 1241,
                  "end": 1249
                },
                "start": 1238,
                "end": 1249
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1252,
                "end": 1259
              },
              "start": 1250,
              "end": 1259
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1237,
            "end": 1259
          }
        ],
        "start": 1231,
        "end": 1261
      },
      "declare": false,
      "start": 1219,
      "end": 1261
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1272,
        "end": 1275
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "idx",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1281,
              "end": 1287
            },
            "start": 1279,
            "end": 1287
          },
          "start": 1276,
          "end": 1287
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null,
            "start": 1290,
            "end": 1291
          },
          "typeArguments": null,
          "start": 1290,
          "end": 1291
        },
        "start": 1288,
        "end": 1291
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1315,
                    "end": 1316
                  },
                  "value": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1318,
                    "end": 1322
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1315,
                  "end": 1322
                }
              ],
              "start": 1305,
              "end": 1328
            },
            "start": 1298,
            "end": 1328
          }
        ],
        "start": 1292,
        "end": 1330
      },
      "expression": false,
      "start": 1263,
      "end": 1330
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
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
                "name": "c4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1336,
                "end": 1338
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c5",
                "optional": false,
                "typeAnnotation": null,
                "start": 1340,
                "end": 1342
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c6",
                "optional": false,
                "typeAnnotation": null,
                "start": 1344,
                "end": 1346
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1335,
            "end": 1347
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1350,
              "end": 1353
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1354,
                "end": 1355
              }
            ],
            "optional": false,
            "start": 1350,
            "end": 1356
          },
          "definite": false,
          "start": 1335,
          "end": 1356
        }
      ],
      "declare": false,
      "start": 1331,
      "end": 1357
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 165,
  "end": 1367
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 165,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "a0",
    "start": 171,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 178,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 206,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 212,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 219,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 227,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 590,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "b0",
    "start": 595,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 599,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 603,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 609,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 617,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 626,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 636,
    "end": 637
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 638,
    "end": 639
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 641,
    "end": 642
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 643,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 652,
    "end": 653
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 664,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "J",
    "start": 674,
    "end": 675
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 676,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 684,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 690,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 698,
    "end": 699
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 707,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 715,
    "end": 716
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 718,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 727,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "J",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 736,
    "end": 737
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 742,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 751,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 759,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 767,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 775,
    "end": 776
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 777,
    "end": 778
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 780,
    "end": 781
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 786,
    "end": 787
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 788,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 793,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 796,
    "end": 797
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 798,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 808,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 812,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 818,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 823,
    "end": 824
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1089,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 1093,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1110,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "c0",
    "start": 1115,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1119,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1125,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1133,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1144,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 1147,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1164,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 1169,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 1173,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1179,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1187,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1198,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 1201,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1219,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 1238,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1243,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1252,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1263,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1272,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 1276,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1281,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1298,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1318,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1331,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 1336,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 1340,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "c6",
    "start": 1344,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1350,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1356,
    "end": 1357
  }
]
```
