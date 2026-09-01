__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigintVal",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBigIntKeyword",
                "start": 108,
                "end": 114
              },
              "start": 106,
              "end": 114
            },
            "start": 97,
            "end": 114
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigInt",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 123
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 123,
                "raw": "123",
                "start": 124,
                "end": 127
              }
            ],
            "optional": false,
            "start": 117,
            "end": 128
          },
          "definite": false,
          "start": 97,
          "end": 128
        }
      ],
      "declare": false,
      "start": 93,
      "end": 129
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 130,
          "end": 139
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 148
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "456",
              "raw": "\"456\"",
              "start": 149,
              "end": 154
            }
          ],
          "optional": false,
          "start": 142,
          "end": 155
        },
        "start": 130,
        "end": 155
      },
      "directive": null,
      "start": 130,
      "end": 156
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "BigInt",
          "optional": false,
          "typeAnnotation": null,
          "start": 161,
          "end": 167
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 123,
            "raw": "123",
            "start": 168,
            "end": 171
          }
        ],
        "start": 157,
        "end": 172
      },
      "directive": null,
      "start": 157,
      "end": 173
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 174,
          "end": 183
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigInt",
              "optional": false,
              "typeAnnotation": null,
              "start": 186,
              "end": 192
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "asIntN",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 199
            },
            "optional": false,
            "computed": false,
            "start": 186,
            "end": 199
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 8,
              "raw": "8",
              "start": 200,
              "end": 201
            },
            {
              "type": "Literal",
              "value": null,
              "raw": "0xFFFFn",
              "bigint": "65535",
              "start": 203,
              "end": 210
            }
          ],
          "optional": false,
          "start": 186,
          "end": 211
        },
        "start": 174,
        "end": 211
      },
      "directive": null,
      "start": 174,
      "end": 212
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 213,
          "end": 222
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigInt",
              "optional": false,
              "typeAnnotation": null,
              "start": 225,
              "end": 231
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "asUintN",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 239
            },
            "optional": false,
            "computed": false,
            "start": 225,
            "end": 239
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 8,
              "raw": "8",
              "start": 240,
              "end": 241
            },
            {
              "type": "Literal",
              "value": null,
              "raw": "0xFFFFn",
              "bigint": "65535",
              "start": 243,
              "end": 250
            }
          ],
          "optional": false,
          "start": 225,
          "end": 251
        },
        "start": 213,
        "end": 251
      },
      "directive": null,
      "start": 213,
      "end": 252
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 253,
          "end": 262
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null,
              "start": 265,
              "end": 274
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "valueOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 275,
              "end": 282
            },
            "optional": false,
            "computed": false,
            "start": 265,
            "end": 282
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 265,
          "end": 284
        },
        "start": 253,
        "end": 284
      },
      "directive": null,
      "start": 253,
      "end": 285
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringVal",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 344,
                "end": 350
              },
              "start": 342,
              "end": 350
            },
            "start": 333,
            "end": 350
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "bigintVal",
                "optional": false,
                "typeAnnotation": null,
                "start": 353,
                "end": 362
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null,
                "start": 363,
                "end": 371
              },
              "optional": false,
              "computed": false,
              "start": 353,
              "end": 371
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 353,
            "end": 373
          },
          "definite": false,
          "start": 333,
          "end": 373
        }
      ],
      "declare": false,
      "start": 329,
      "end": 374
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 422,
          "end": 431
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null,
              "start": 434,
              "end": 443
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null,
              "start": 444,
              "end": 452
            },
            "optional": false,
            "computed": false,
            "start": 434,
            "end": 452
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 453,
              "end": 454
            }
          ],
          "optional": false,
          "start": 434,
          "end": 455
        },
        "start": 422,
        "end": 455
      },
      "directive": null,
      "start": 422,
      "end": 456
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 500,
          "end": 509
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null,
              "start": 512,
              "end": 521
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 522,
              "end": 536
            },
            "optional": false,
            "computed": false,
            "start": 512,
            "end": 536
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 512,
          "end": 538
        },
        "start": 500,
        "end": 538
      },
      "directive": null,
      "start": 500,
      "end": 539
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 587,
          "end": 596
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null,
              "start": 599,
              "end": 608
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 609,
              "end": 623
            },
            "optional": false,
            "computed": false,
            "start": 599,
            "end": 623
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "de-DE",
              "raw": "'de-DE'",
              "start": 624,
              "end": 631
            }
          ],
          "optional": false,
          "start": 599,
          "end": 632
        },
        "start": 587,
        "end": 632
      },
      "directive": null,
      "start": 587,
      "end": 633
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 681,
          "end": 690
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null,
              "start": 693,
              "end": 702
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 703,
              "end": 717
            },
            "optional": false,
            "computed": false,
            "start": 693,
            "end": 717
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "de-DE",
              "raw": "'de-DE'",
              "start": 718,
              "end": 725
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 729,
                    "end": 734
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 736,
                    "end": 746
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 729,
                  "end": 746
                }
              ],
              "start": 727,
              "end": 748
            }
          ],
          "optional": false,
          "start": 693,
          "end": 749
        },
        "start": 681,
        "end": 749
      },
      "directive": null,
      "start": 681,
      "end": 750
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 798,
          "end": 807
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null,
              "start": 810,
              "end": 819
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 820,
              "end": 834
            },
            "optional": false,
            "computed": false,
            "start": 810,
            "end": 834
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "de-DE",
              "raw": "'de-DE'",
              "start": 835,
              "end": 842
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 846,
                    "end": 851
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 853,
                    "end": 863
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 846,
                  "end": 863
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 865,
                    "end": 873
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 875,
                    "end": 880
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 865,
                  "end": 880
                }
              ],
              "start": 844,
              "end": 882
            }
          ],
          "optional": false,
          "start": 810,
          "end": 883
        },
        "start": 798,
        "end": 883
      },
      "directive": null,
      "start": 798,
      "end": 883
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigIntArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BigInt64Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 971,
                  "end": 984
                },
                "typeArguments": null,
                "start": 971,
                "end": 984
              },
              "start": 969,
              "end": 984
            },
            "start": 958,
            "end": 984
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigInt64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 991,
              "end": 1004
            },
            "typeArguments": null,
            "arguments": [],
            "start": 987,
            "end": 1006
          },
          "definite": false,
          "start": 958,
          "end": 1006
        }
      ],
      "declare": false,
      "start": 954,
      "end": 1007
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1008,
          "end": 1019
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1026,
            "end": 1039
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 1040,
              "end": 1042
            }
          ],
          "start": 1022,
          "end": 1043
        },
        "start": 1008,
        "end": 1043
      },
      "directive": null,
      "start": 1008,
      "end": 1044
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1045,
          "end": 1056
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1063,
            "end": 1076
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "1n",
                  "bigint": "1",
                  "start": 1078,
                  "end": 1080
                },
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "2n",
                  "bigint": "2",
                  "start": 1082,
                  "end": 1084
                },
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "3n",
                  "bigint": "3",
                  "start": 1086,
                  "end": 1088
                }
              ],
              "start": 1077,
              "end": 1089
            }
          ],
          "start": 1059,
          "end": 1090
        },
        "start": 1045,
        "end": 1090
      },
      "directive": null,
      "start": 1045,
      "end": 1091
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1092,
          "end": 1103
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1110,
            "end": 1123
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1125,
                  "end": 1126
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1128,
                  "end": 1129
                },
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 1131,
                  "end": 1132
                }
              ],
              "start": 1124,
              "end": 1133
            }
          ],
          "start": 1106,
          "end": 1134
        },
        "start": 1092,
        "end": 1134
      },
      "directive": null,
      "start": 1092,
      "end": 1135
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1136,
          "end": 1147
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1154,
            "end": 1167
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null,
                "start": 1172,
                "end": 1183
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 80,
                  "raw": "80",
                  "start": 1184,
                  "end": 1186
                }
              ],
              "start": 1168,
              "end": 1187
            }
          ],
          "start": 1150,
          "end": 1188
        },
        "start": 1136,
        "end": 1188
      },
      "directive": null,
      "start": 1136,
      "end": 1189
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1190,
          "end": 1201
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1208,
            "end": 1221
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null,
                "start": 1226,
                "end": 1237
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 80,
                  "raw": "80",
                  "start": 1238,
                  "end": 1240
                }
              ],
              "start": 1222,
              "end": 1241
            },
            {
              "type": "Literal",
              "value": 8,
              "raw": "8",
              "start": 1243,
              "end": 1244
            }
          ],
          "start": 1204,
          "end": 1245
        },
        "start": 1190,
        "end": 1245
      },
      "directive": null,
      "start": 1190,
      "end": 1246
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1247,
          "end": 1258
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1265,
            "end": 1278
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null,
                "start": 1283,
                "end": 1294
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 80,
                  "raw": "80",
                  "start": 1295,
                  "end": 1297
                }
              ],
              "start": 1279,
              "end": 1298
            },
            {
              "type": "Literal",
              "value": 8,
              "raw": "8",
              "start": 1300,
              "end": 1301
            },
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 1303,
              "end": 1304
            }
          ],
          "start": 1261,
          "end": 1305
        },
        "start": 1247,
        "end": 1305
      },
      "directive": null,
      "start": 1247,
      "end": 1306
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "len",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1316,
                "end": 1322
              },
              "start": 1314,
              "end": 1322
            },
            "start": 1311,
            "end": 1322
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigIntArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 1325,
              "end": 1336
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null,
              "start": 1337,
              "end": 1343
            },
            "optional": false,
            "computed": false,
            "start": 1325,
            "end": 1343
          },
          "definite": false,
          "start": 1311,
          "end": 1343
        }
      ],
      "declare": false,
      "start": 1307,
      "end": 1344
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigIntArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 1345,
            "end": 1356
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "length",
            "optional": false,
            "typeAnnotation": null,
            "start": 1357,
            "end": 1363
          },
          "optional": false,
          "computed": false,
          "start": 1345,
          "end": 1363
        },
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 1366,
          "end": 1368
        },
        "start": 1345,
        "end": 1368
      },
      "directive": null,
      "start": 1345,
      "end": 1369
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "arrayBufferLike",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArrayBufferView",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1391,
                  "end": 1406
                },
                "typeArguments": null,
                "start": 1391,
                "end": 1406
              },
              "start": 1389,
              "end": 1406
            },
            "start": 1374,
            "end": 1406
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigIntArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 1409,
            "end": 1420
          },
          "definite": false,
          "start": 1374,
          "end": 1420
        }
      ],
      "declare": false,
      "start": 1370,
      "end": 1421
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigUintArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BigUint64Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1464,
                  "end": 1478
                },
                "typeArguments": null,
                "start": 1464,
                "end": 1478
              },
              "start": 1462,
              "end": 1478
            },
            "start": 1450,
            "end": 1478
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigUint64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1485,
              "end": 1499
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1481,
            "end": 1501
          },
          "definite": false,
          "start": 1450,
          "end": 1501
        }
      ],
      "declare": false,
      "start": 1446,
      "end": 1502
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigUintArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1503,
          "end": 1515
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1522,
            "end": 1536
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 1537,
              "end": 1539
            }
          ],
          "start": 1518,
          "end": 1540
        },
        "start": 1503,
        "end": 1540
      },
      "directive": null,
      "start": 1503,
      "end": 1541
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigUintArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1542,
          "end": 1554
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1561,
            "end": 1575
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "1n",
                  "bigint": "1",
                  "start": 1577,
                  "end": 1579
                },
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "2n",
                  "bigint": "2",
                  "start": 1581,
                  "end": 1583
                },
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "3n",
                  "bigint": "3",
                  "start": 1585,
                  "end": 1587
                }
              ],
              "start": 1576,
              "end": 1588
            }
          ],
          "start": 1557,
          "end": 1589
        },
        "start": 1542,
        "end": 1589
      },
      "directive": null,
      "start": 1542,
      "end": 1590
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigUintArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1591,
          "end": 1603
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1610,
            "end": 1624
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1626,
                  "end": 1627
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1629,
                  "end": 1630
                },
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 1632,
                  "end": 1633
                }
              ],
              "start": 1625,
              "end": 1634
            }
          ],
          "start": 1606,
          "end": 1635
        },
        "start": 1591,
        "end": 1635
      },
      "directive": null,
      "start": 1591,
      "end": 1636
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigUintArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1637,
          "end": 1649
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1656,
            "end": 1670
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null,
                "start": 1675,
                "end": 1686
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 80,
                  "raw": "80",
                  "start": 1687,
                  "end": 1689
                }
              ],
              "start": 1671,
              "end": 1690
            }
          ],
          "start": 1652,
          "end": 1691
        },
        "start": 1637,
        "end": 1691
      },
      "directive": null,
      "start": 1637,
      "end": 1692
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigUintArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1693,
          "end": 1705
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1712,
            "end": 1726
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null,
                "start": 1731,
                "end": 1742
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 80,
                  "raw": "80",
                  "start": 1743,
                  "end": 1745
                }
              ],
              "start": 1727,
              "end": 1746
            },
            {
              "type": "Literal",
              "value": 8,
              "raw": "8",
              "start": 1748,
              "end": 1749
            }
          ],
          "start": 1708,
          "end": 1750
        },
        "start": 1693,
        "end": 1750
      },
      "directive": null,
      "start": 1693,
      "end": 1751
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigUintArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1752,
          "end": 1764
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1771,
            "end": 1785
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null,
                "start": 1790,
                "end": 1801
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 80,
                  "raw": "80",
                  "start": 1802,
                  "end": 1804
                }
              ],
              "start": 1786,
              "end": 1805
            },
            {
              "type": "Literal",
              "value": 8,
              "raw": "8",
              "start": 1807,
              "end": 1808
            },
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 1810,
              "end": 1811
            }
          ],
          "start": 1767,
          "end": 1812
        },
        "start": 1752,
        "end": 1812
      },
      "directive": null,
      "start": 1752,
      "end": 1813
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "len",
          "optional": false,
          "typeAnnotation": null,
          "start": 1814,
          "end": 1817
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigIntArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 1820,
            "end": 1831
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "length",
            "optional": false,
            "typeAnnotation": null,
            "start": 1832,
            "end": 1838
          },
          "optional": false,
          "computed": false,
          "start": 1820,
          "end": 1838
        },
        "start": 1814,
        "end": 1838
      },
      "directive": null,
      "start": 1814,
      "end": 1839
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigIntArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 1840,
            "end": 1851
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "length",
            "optional": false,
            "typeAnnotation": null,
            "start": 1852,
            "end": 1858
          },
          "optional": false,
          "computed": false,
          "start": 1840,
          "end": 1858
        },
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 1861,
          "end": 1863
        },
        "start": 1840,
        "end": 1863
      },
      "directive": null,
      "start": 1840,
      "end": 1864
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arrayBufferLike",
          "optional": false,
          "typeAnnotation": null,
          "start": 1865,
          "end": 1880
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1883,
          "end": 1894
        },
        "start": 1865,
        "end": 1894
      },
      "directive": null,
      "start": 1865,
      "end": 1895
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null,
            "start": 1934,
            "end": 1942
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "DataView",
              "optional": false,
              "typeAnnotation": null,
              "start": 1949,
              "end": 1957
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArrayBuffer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1962,
                  "end": 1973
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 80,
                    "raw": "80",
                    "start": 1974,
                    "end": 1976
                  }
                ],
                "start": 1958,
                "end": 1977
              }
            ],
            "start": 1945,
            "end": 1978
          },
          "definite": false,
          "start": 1934,
          "end": 1978
        }
      ],
      "declare": false,
      "start": 1928,
      "end": 1979
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
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null,
            "start": 1980,
            "end": 1988
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setBigInt64",
            "optional": false,
            "typeAnnotation": null,
            "start": 1989,
            "end": 2000
          },
          "optional": false,
          "computed": false,
          "start": 1980,
          "end": 2000
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 2001,
            "end": 2002
          },
          {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "1n",
              "bigint": "1",
              "start": 2005,
              "end": 2007
            },
            "prefix": true,
            "start": 2004,
            "end": 2007
          }
        ],
        "optional": false,
        "start": 1980,
        "end": 2008
      },
      "directive": null,
      "start": 1980,
      "end": 2009
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
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null,
            "start": 2010,
            "end": 2018
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setBigInt64",
            "optional": false,
            "typeAnnotation": null,
            "start": 2019,
            "end": 2030
          },
          "optional": false,
          "computed": false,
          "start": 2010,
          "end": 2030
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 2031,
            "end": 2032
          },
          {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "1n",
              "bigint": "1",
              "start": 2035,
              "end": 2037
            },
            "prefix": true,
            "start": 2034,
            "end": 2037
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 2039,
            "end": 2043
          }
        ],
        "optional": false,
        "start": 2010,
        "end": 2044
      },
      "directive": null,
      "start": 2010,
      "end": 2045
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
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null,
            "start": 2046,
            "end": 2054
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setBigInt64",
            "optional": false,
            "typeAnnotation": null,
            "start": 2055,
            "end": 2066
          },
          "optional": false,
          "computed": false,
          "start": 2046,
          "end": 2066
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 2067,
            "end": 2068
          },
          {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 2071,
              "end": 2072
            },
            "prefix": true,
            "start": 2070,
            "end": 2072
          }
        ],
        "optional": false,
        "start": 2046,
        "end": 2073
      },
      "directive": null,
      "start": 2046,
      "end": 2074
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
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null,
            "start": 2075,
            "end": 2083
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setBigUint64",
            "optional": false,
            "typeAnnotation": null,
            "start": 2084,
            "end": 2096
          },
          "optional": false,
          "computed": false,
          "start": 2075,
          "end": 2096
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 2097,
            "end": 2098
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "123n",
            "bigint": "123",
            "start": 2100,
            "end": 2104
          }
        ],
        "optional": false,
        "start": 2075,
        "end": 2105
      },
      "directive": null,
      "start": 2075,
      "end": 2106
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
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null,
            "start": 2107,
            "end": 2115
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setBigUint64",
            "optional": false,
            "typeAnnotation": null,
            "start": 2116,
            "end": 2128
          },
          "optional": false,
          "computed": false,
          "start": 2107,
          "end": 2128
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 2129,
            "end": 2130
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "123n",
            "bigint": "123",
            "start": 2132,
            "end": 2136
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 2138,
            "end": 2142
          }
        ],
        "optional": false,
        "start": 2107,
        "end": 2143
      },
      "directive": null,
      "start": 2107,
      "end": 2144
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
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null,
            "start": 2145,
            "end": 2153
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setBigUint64",
            "optional": false,
            "typeAnnotation": null,
            "start": 2154,
            "end": 2166
          },
          "optional": false,
          "computed": false,
          "start": 2145,
          "end": 2166
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 2167,
            "end": 2168
          },
          {
            "type": "Literal",
            "value": 123,
            "raw": "123",
            "start": 2170,
            "end": 2173
          }
        ],
        "optional": false,
        "start": 2145,
        "end": 2174
      },
      "directive": null,
      "start": 2145,
      "end": 2175
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 2176,
          "end": 2185
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dataView",
              "optional": false,
              "typeAnnotation": null,
              "start": 2188,
              "end": 2196
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "getBigInt64",
              "optional": false,
              "typeAnnotation": null,
              "start": 2197,
              "end": 2208
            },
            "optional": false,
            "computed": false,
            "start": 2188,
            "end": 2208
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 2209,
              "end": 2210
            }
          ],
          "optional": false,
          "start": 2188,
          "end": 2211
        },
        "start": 2176,
        "end": 2211
      },
      "directive": null,
      "start": 2176,
      "end": 2212
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 2213,
          "end": 2222
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dataView",
              "optional": false,
              "typeAnnotation": null,
              "start": 2225,
              "end": 2233
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "getBigInt64",
              "optional": false,
              "typeAnnotation": null,
              "start": 2234,
              "end": 2245
            },
            "optional": false,
            "computed": false,
            "start": 2225,
            "end": 2245
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 2246,
              "end": 2247
            },
            {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 2249,
              "end": 2253
            }
          ],
          "optional": false,
          "start": 2225,
          "end": 2254
        },
        "start": 2213,
        "end": 2254
      },
      "directive": null,
      "start": 2213,
      "end": 2255
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 2256,
          "end": 2265
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dataView",
              "optional": false,
              "typeAnnotation": null,
              "start": 2268,
              "end": 2276
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "getBigUint64",
              "optional": false,
              "typeAnnotation": null,
              "start": 2277,
              "end": 2289
            },
            "optional": false,
            "computed": false,
            "start": 2268,
            "end": 2289
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 2290,
              "end": 2291
            }
          ],
          "optional": false,
          "start": 2268,
          "end": 2292
        },
        "start": 2256,
        "end": 2292
      },
      "directive": null,
      "start": 2256,
      "end": 2293
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 2294,
          "end": 2303
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dataView",
              "optional": false,
              "typeAnnotation": null,
              "start": 2306,
              "end": 2314
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "getBigUint64",
              "optional": false,
              "typeAnnotation": null,
              "start": 2315,
              "end": 2327
            },
            "optional": false,
            "computed": false,
            "start": 2306,
            "end": 2327
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 2328,
              "end": 2329
            },
            {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 2331,
              "end": 2335
            }
          ],
          "optional": false,
          "start": 2306,
          "end": 2336
        },
        "start": 2294,
        "end": 2336
      },
      "directive": null,
      "start": 2294,
      "end": 2337
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 2388,
                "end": 2392
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberFormat",
                "optional": false,
                "typeAnnotation": null,
                "start": 2393,
                "end": 2405
              },
              "optional": false,
              "computed": false,
              "start": 2388,
              "end": 2405
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "fr",
                "raw": "\"fr\"",
                "start": 2406,
                "end": 2410
              }
            ],
            "start": 2384,
            "end": 2411
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "format",
            "optional": false,
            "typeAnnotation": null,
            "start": 2412,
            "end": 2418
          },
          "optional": false,
          "computed": false,
          "start": 2384,
          "end": 2418
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "3000n",
            "bigint": "3000",
            "start": 2419,
            "end": 2424
          }
        ],
        "optional": false,
        "start": 2384,
        "end": 2425
      },
      "directive": null,
      "start": 2384,
      "end": 2426
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 2431,
                "end": 2435
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberFormat",
                "optional": false,
                "typeAnnotation": null,
                "start": 2436,
                "end": 2448
              },
              "optional": false,
              "computed": false,
              "start": 2431,
              "end": 2448
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "fr",
                "raw": "\"fr\"",
                "start": 2449,
                "end": 2453
              }
            ],
            "start": 2427,
            "end": 2454
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "format",
            "optional": false,
            "typeAnnotation": null,
            "start": 2455,
            "end": 2461
          },
          "optional": false,
          "computed": false,
          "start": 2427,
          "end": 2461
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "bigintVal",
            "optional": false,
            "typeAnnotation": null,
            "start": 2462,
            "end": 2471
          }
        ],
        "optional": false,
        "start": 2427,
        "end": 2472
      },
      "directive": null,
      "start": 2427,
      "end": 2473
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 93,
  "end": 2473
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 93,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "bigintVal",
    "start": 97,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 108,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "BigInt",
    "start": 117,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 123,
    "end": 124
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 124,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "bigintVal",
    "start": 130,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "BigInt",
    "start": 142,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 148,
    "end": 149
  },
  {
    "type": "String",
    "value": "\"456\"",
    "start": 149,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 157,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "BigInt",
    "start": 161,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 167,
    "end": 168
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 168,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "bigintVal",
    "start": 174,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "BigInt",
    "start": 186,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "asIntN",
    "start": 193,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 199,
    "end": 200
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 201,
    "end": 202
  },
  {
    "type": "Numeric",
    "value": "0xFFFFn",
    "start": 203,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "bigintVal",
    "start": 213,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "BigInt",
    "start": 225,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "asUintN",
    "start": 232,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 239,
    "end": 240
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 241,
    "end": 242
  },
  {
    "type": "Numeric",
    "value": "0xFFFFn",
    "start": 243,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "bigintVal",
    "start": 253,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "bigintVal",
    "start": 265,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "valueOf",
    "start": 275,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 284,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 329,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "stringVal",
    "start": 333,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 344,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "bigintVal",
    "start": 353,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 363,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "stringVal",
    "start": 422,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "bigintVal",
    "start": 434,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 444,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 452,
    "end": 453
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "stringVal",
    "start": 500,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "bigintVal",
    "start": 512,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 522,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "stringVal",
    "start": 587,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "bigintVal",
    "start": 599,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 609,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 623,
    "end": 624
  },
  {
    "type": "String",
    "value": "'de-DE'",
    "start": 624,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "stringVal",
    "start": 681,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "bigintVal",
    "start": 693,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 703,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 717,
    "end": 718
  },
  {
    "type": "String",
    "value": "'de-DE'",
    "start": 718,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 729,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 734,
    "end": 735
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 736,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "stringVal",
    "start": 798,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "bigintVal",
    "start": 810,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 820,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 834,
    "end": 835
  },
  {
    "type": "String",
    "value": "'de-DE'",
    "start": 835,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 846,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 851,
    "end": 852
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 853,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 865,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 873,
    "end": 874
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 875,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 882,
    "end": 883
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 954,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "bigIntArray",
    "start": 958,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "BigInt64Array",
    "start": 971,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 985,
    "end": 986
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 987,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "BigInt64Array",
    "start": 991,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "bigIntArray",
    "start": 1008,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1022,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "BigInt64Array",
    "start": 1026,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1040,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "bigIntArray",
    "start": 1045,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1059,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "BigInt64Array",
    "start": 1063,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 1078,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Numeric",
    "value": "2n",
    "start": 1082,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Numeric",
    "value": "3n",
    "start": 1086,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "bigIntArray",
    "start": 1092,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1106,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "BigInt64Array",
    "start": 1110,
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
    "value": "[",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "bigIntArray",
    "start": 1136,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1150,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "BigInt64Array",
    "start": 1154,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1168,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "ArrayBuffer",
    "start": 1172,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Numeric",
    "value": "80",
    "start": 1184,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "bigIntArray",
    "start": 1190,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1204,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "BigInt64Array",
    "start": 1208,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1222,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "ArrayBuffer",
    "start": 1226,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Numeric",
    "value": "80",
    "start": 1238,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "bigIntArray",
    "start": 1247,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1261,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "BigInt64Array",
    "start": 1265,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1279,
    "end": 1282
  },
  {
    "type": "Identifier",
    "value": "ArrayBuffer",
    "start": 1283,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Numeric",
    "value": "80",
    "start": 1295,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1307,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "len",
    "start": 1311,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1316,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Identifier",
    "value": "bigIntArray",
    "start": 1325,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1337,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Identifier",
    "value": "bigIntArray",
    "start": 1345,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1357,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1366,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1370,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "arrayBufferLike",
    "start": 1374,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Identifier",
    "value": "ArrayBufferView",
    "start": 1391,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Identifier",
    "value": "bigIntArray",
    "start": 1409,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1446,
    "end": 1449
  },
  {
    "type": "Identifier",
    "value": "bigUintArray",
    "start": 1450,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Identifier",
    "value": "BigUint64Array",
    "start": 1464,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1481,
    "end": 1484
  },
  {
    "type": "Identifier",
    "value": "BigUint64Array",
    "start": 1485,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Identifier",
    "value": "bigUintArray",
    "start": 1503,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1518,
    "end": 1521
  },
  {
    "type": "Identifier",
    "value": "BigUint64Array",
    "start": 1522,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1537,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Identifier",
    "value": "bigUintArray",
    "start": 1542,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1557,
    "end": 1560
  },
  {
    "type": "Identifier",
    "value": "BigUint64Array",
    "start": 1561,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 1577,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Numeric",
    "value": "2n",
    "start": 1581,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Numeric",
    "value": "3n",
    "start": 1585,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Identifier",
    "value": "bigUintArray",
    "start": 1591,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1606,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "BigUint64Array",
    "start": 1610,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Identifier",
    "value": "bigUintArray",
    "start": 1637,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1652,
    "end": 1655
  },
  {
    "type": "Identifier",
    "value": "BigUint64Array",
    "start": 1656,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1671,
    "end": 1674
  },
  {
    "type": "Identifier",
    "value": "ArrayBuffer",
    "start": 1675,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Numeric",
    "value": "80",
    "start": 1687,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "bigUintArray",
    "start": 1693,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1708,
    "end": 1711
  },
  {
    "type": "Identifier",
    "value": "BigUint64Array",
    "start": 1712,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1727,
    "end": 1730
  },
  {
    "type": "Identifier",
    "value": "ArrayBuffer",
    "start": 1731,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Numeric",
    "value": "80",
    "start": 1743,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Identifier",
    "value": "bigUintArray",
    "start": 1752,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1767,
    "end": 1770
  },
  {
    "type": "Identifier",
    "value": "BigUint64Array",
    "start": 1771,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1786,
    "end": 1789
  },
  {
    "type": "Identifier",
    "value": "ArrayBuffer",
    "start": 1790,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Numeric",
    "value": "80",
    "start": 1802,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Identifier",
    "value": "len",
    "start": 1814,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Identifier",
    "value": "bigIntArray",
    "start": 1820,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1832,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Identifier",
    "value": "bigIntArray",
    "start": 1840,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1852,
    "end": 1858
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1861,
    "end": 1863
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Identifier",
    "value": "arrayBufferLike",
    "start": 1865,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Identifier",
    "value": "bigIntArray",
    "start": 1883,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1928,
    "end": 1933
  },
  {
    "type": "Identifier",
    "value": "dataView",
    "start": 1934,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1945,
    "end": 1948
  },
  {
    "type": "Identifier",
    "value": "DataView",
    "start": 1949,
    "end": 1957
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1958,
    "end": 1961
  },
  {
    "type": "Identifier",
    "value": "ArrayBuffer",
    "start": 1962,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Numeric",
    "value": "80",
    "start": 1974,
    "end": 1976
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Identifier",
    "value": "dataView",
    "start": 1980,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Identifier",
    "value": "setBigInt64",
    "start": 1989,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 2005,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Identifier",
    "value": "dataView",
    "start": 2010,
    "end": 2018
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Identifier",
    "value": "setBigInt64",
    "start": 2019,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 2035,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2039,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Identifier",
    "value": "dataView",
    "start": 2046,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Identifier",
    "value": "setBigInt64",
    "start": 2055,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Identifier",
    "value": "dataView",
    "start": 2075,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Identifier",
    "value": "setBigUint64",
    "start": 2084,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Numeric",
    "value": "123n",
    "start": 2100,
    "end": 2104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Identifier",
    "value": "dataView",
    "start": 2107,
    "end": 2115
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Identifier",
    "value": "setBigUint64",
    "start": 2116,
    "end": 2128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Numeric",
    "value": "123n",
    "start": 2132,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2138,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Identifier",
    "value": "dataView",
    "start": 2145,
    "end": 2153
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Identifier",
    "value": "setBigUint64",
    "start": 2154,
    "end": 2166
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2167,
    "end": 2168
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 2170,
    "end": 2173
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Identifier",
    "value": "bigintVal",
    "start": 2176,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Identifier",
    "value": "dataView",
    "start": 2188,
    "end": 2196
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Identifier",
    "value": "getBigInt64",
    "start": 2197,
    "end": 2208
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2208,
    "end": 2209
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2209,
    "end": 2210
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2211,
    "end": 2212
  },
  {
    "type": "Identifier",
    "value": "bigintVal",
    "start": 2213,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Identifier",
    "value": "dataView",
    "start": 2225,
    "end": 2233
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2233,
    "end": 2234
  },
  {
    "type": "Identifier",
    "value": "getBigInt64",
    "start": 2234,
    "end": 2245
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2245,
    "end": 2246
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2247,
    "end": 2248
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2249,
    "end": 2253
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Identifier",
    "value": "bigintVal",
    "start": 2256,
    "end": 2265
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Identifier",
    "value": "dataView",
    "start": 2268,
    "end": 2276
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Identifier",
    "value": "getBigUint64",
    "start": 2277,
    "end": 2289
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2291,
    "end": 2292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Identifier",
    "value": "bigintVal",
    "start": 2294,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "Identifier",
    "value": "dataView",
    "start": 2306,
    "end": 2314
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Identifier",
    "value": "getBigUint64",
    "start": 2315,
    "end": 2327
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2328,
    "end": 2329
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2329,
    "end": 2330
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2331,
    "end": 2335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2384,
    "end": 2387
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 2388,
    "end": 2392
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 2393,
    "end": 2405
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "String",
    "value": "\"fr\"",
    "start": 2406,
    "end": 2410
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2410,
    "end": 2411
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2411,
    "end": 2412
  },
  {
    "type": "Identifier",
    "value": "format",
    "start": 2412,
    "end": 2418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2418,
    "end": 2419
  },
  {
    "type": "Numeric",
    "value": "3000n",
    "start": 2419,
    "end": 2424
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2424,
    "end": 2425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2425,
    "end": 2426
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2427,
    "end": 2430
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 2431,
    "end": 2435
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 2436,
    "end": 2448
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2448,
    "end": 2449
  },
  {
    "type": "String",
    "value": "\"fr\"",
    "start": 2449,
    "end": 2453
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2453,
    "end": 2454
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2454,
    "end": 2455
  },
  {
    "type": "Identifier",
    "value": "format",
    "start": 2455,
    "end": 2461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2461,
    "end": 2462
  },
  {
    "type": "Identifier",
    "value": "bigintVal",
    "start": 2462,
    "end": 2471
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2472,
    "end": 2473
  }
]
```
