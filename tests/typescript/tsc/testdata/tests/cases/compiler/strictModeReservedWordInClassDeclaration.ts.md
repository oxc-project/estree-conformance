__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "public",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 17,
        "end": 20
      },
      "declare": false,
      "start": 0,
      "end": 20
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 31
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 49
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 50,
                  "end": 57
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 65
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "static",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 73
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 85,
                        "end": 92
                      },
                      "right": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 95,
                          "end": 101
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "static",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 104,
                          "end": 110
                        },
                        "start": 95,
                        "end": 110
                      },
                      "start": 85,
                      "end": 110
                    },
                    "directive": null,
                    "start": 85,
                    "end": 111
                  }
                ],
                "start": 75,
                "end": 117
              },
              "expression": false,
              "start": 49,
              "end": 117
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 38,
            "end": 117
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "banana",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 135
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 139,
                        "end": 145
                      },
                      "typeArguments": null,
                      "start": 139,
                      "end": 145
                    },
                    "start": 137,
                    "end": 145
                  },
                  "start": 136,
                  "end": 145
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 147,
                "end": 150
              },
              "expression": false,
              "start": 135,
              "end": 150
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 122,
            "end": 150
          }
        ],
        "start": 32,
        "end": 152
      },
      "abstract": false,
      "declare": false,
      "start": 22,
      "end": 152
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 160,
        "end": 161
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 179
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 187,
                    "end": 193
                  },
                  "readonly": false,
                  "static": false,
                  "start": 180,
                  "end": 193
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "let",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 195,
                  "end": 198
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 200,
                "end": 207
              },
              "expression": false,
              "start": 179,
              "end": 207
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 168,
            "end": 207
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 212,
              "end": 216
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 217,
                  "end": 224
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "static",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 226,
                  "end": 232
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 234,
                  "end": 240
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "let",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 261,
                      "end": 264
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
                      "start": 267,
                      "end": 270
                    },
                    "expression": false,
                    "start": 252,
                    "end": 270
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
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 283,
                          "end": 284
                        },
                        "init": {
                          "type": "FunctionExpression",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "let",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 296,
                            "end": 299
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
                            "start": 302,
                            "end": 305
                          },
                          "expression": false,
                          "start": 287,
                          "end": 305
                        },
                        "definite": false,
                        "start": 283,
                        "end": 305
                      }
                    ],
                    "declare": false,
                    "start": 279,
                    "end": 306
                  }
                ],
                "start": 242,
                "end": 312
              },
              "expression": false,
              "start": 216,
              "end": 312
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 212,
            "end": 312
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pulbic",
              "optional": false,
              "typeAnnotation": null,
              "start": 325,
              "end": 331
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 334,
                "end": 337
              },
              "expression": false,
              "start": 331,
              "end": 337
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 318,
            "end": 337
          }
        ],
        "start": 162,
        "end": 352
      },
      "abstract": false,
      "declare": false,
      "start": 154,
      "end": 352
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 360,
        "end": 361
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "public",
              "optional": false,
              "typeAnnotation": null,
              "start": 362,
              "end": 368
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 362,
            "end": 368
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "private",
              "optional": false,
              "typeAnnotation": null,
              "start": 370,
              "end": 377
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 370,
            "end": 377
          }
        ],
        "start": 361,
        "end": 378
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 378,
        "end": 381
      },
      "abstract": false,
      "declare": false,
      "start": 354,
      "end": 381
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 389,
        "end": 390
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "public",
            "optional": false,
            "typeAnnotation": null,
            "start": 402,
            "end": 408
          },
          "typeArguments": null,
          "start": 402,
          "end": 408
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 409,
        "end": 412
      },
      "abstract": false,
      "declare": false,
      "start": 383,
      "end": 412
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 420,
        "end": 421
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "public",
                "optional": false,
                "typeAnnotation": null,
                "start": 433,
                "end": 439
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "private",
                "optional": false,
                "typeAnnotation": null,
                "start": 440,
                "end": 447
              },
              "optional": false,
              "computed": false,
              "start": 433,
              "end": 447
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 448,
              "end": 449
            },
            "optional": false,
            "computed": false,
            "start": 433,
            "end": 449
          },
          "typeArguments": null,
          "start": 433,
          "end": 449
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 450,
        "end": 453
      },
      "abstract": false,
      "declare": false,
      "start": 414,
      "end": 453
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F1",
        "optional": false,
        "typeAnnotation": null,
        "start": 460,
        "end": 462
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "public",
                "optional": false,
                "typeAnnotation": null,
                "start": 474,
                "end": 480
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "private",
                "optional": false,
                "typeAnnotation": null,
                "start": 481,
                "end": 488
              },
              "optional": false,
              "computed": false,
              "start": 474,
              "end": 488
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "implements",
              "optional": false,
              "typeAnnotation": null,
              "start": 489,
              "end": 499
            },
            "optional": false,
            "computed": false,
            "start": 474,
            "end": 499
          },
          "typeArguments": null,
          "start": 474,
          "end": 499
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 500,
        "end": 503
      },
      "abstract": false,
      "declare": false,
      "start": 454,
      "end": 503
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null,
        "start": 510,
        "end": 511
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "package",
        "optional": false,
        "typeAnnotation": null,
        "start": 520,
        "end": 527
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 528,
        "end": 531
      },
      "abstract": false,
      "declare": false,
      "start": 504,
      "end": 531
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null,
        "start": 538,
        "end": 539
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "package",
          "optional": false,
          "typeAnnotation": null,
          "start": 548,
          "end": 555
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 556,
          "end": 557
        },
        "optional": false,
        "computed": false,
        "start": 548,
        "end": 557
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 558,
        "end": 561
      },
      "abstract": false,
      "declare": false,
      "start": 532,
      "end": 561
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 561
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "public",
    "start": 10,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 22,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 28,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 38,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "private",
    "start": 50,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "public",
    "start": 59,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "static",
    "start": 67,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "private",
    "start": 85,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "public",
    "start": 95,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "static",
    "start": 104,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 122,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "banana",
    "start": 129,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "public",
    "start": 139,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 154,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 168,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 180,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "public",
    "start": 187,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "let",
    "start": 195,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 212,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "private",
    "start": 217,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "static",
    "start": 226,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "public",
    "start": 234,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 242,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 252,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "let",
    "start": 261,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 269,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 279,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 285,
    "end": 286
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 287,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "let",
    "start": 296,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 311,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 318,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "pulbic",
    "start": 325,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 351,
    "end": 352
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 354,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "public",
    "start": 362,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "private",
    "start": 370,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 380,
    "end": 381
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 383,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 391,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "public",
    "start": 402,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 411,
    "end": 412
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 414,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 420,
    "end": 421
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 422,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "public",
    "start": 433,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "private",
    "start": 440,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 452,
    "end": 453
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 454,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "F1",
    "start": 460,
    "end": 462
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 463,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "public",
    "start": 474,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "private",
    "start": 481,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "implements",
    "start": 489,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 502,
    "end": 503
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 504,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 510,
    "end": 511
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 512,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "package",
    "start": 520,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 530,
    "end": 531
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 532,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 538,
    "end": 539
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 540,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "package",
    "start": 548,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 560,
    "end": 561
  }
]
```
