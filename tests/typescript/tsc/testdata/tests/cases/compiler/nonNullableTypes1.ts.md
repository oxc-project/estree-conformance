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
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 13
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 12,
            "end": 13
          }
        ],
        "start": 11,
        "end": 14
      },
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 18,
                "end": 19
              },
              "typeArguments": null,
              "start": 18,
              "end": 19
            },
            "start": 16,
            "end": 19
          },
          "start": 15,
          "end": 19
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 31,
                  "end": 32
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 35,
                    "end": 36
                  },
                  "operator": "||",
                  "right": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 40,
                    "end": 47
                  },
                  "start": 35,
                  "end": 47
                },
                "definite": false,
                "start": 31,
                "end": 47
              }
            ],
            "declare": false,
            "start": 27,
            "end": 48
          }
        ],
        "start": 21,
        "end": 78
      },
      "expression": false,
      "start": 0,
      "end": 78
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "error",
        "optional": false,
        "typeAnnotation": null,
        "start": 89,
        "end": 94
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 98,
          "end": 103
        },
        "start": 96,
        "end": 103
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 120,
                "end": 125
              },
              "typeArguments": null,
              "arguments": [],
              "start": 116,
              "end": 127
            },
            "start": 110,
            "end": 128
          }
        ],
        "start": 104,
        "end": 130
      },
      "expression": false,
      "start": 80,
      "end": 130
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 141,
        "end": 143
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 144,
              "end": 145
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 144,
            "end": 145
          }
        ],
        "start": 143,
        "end": 146
      },
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 150,
                "end": 151
              },
              "typeArguments": null,
              "start": 150,
              "end": 151
            },
            "start": 148,
            "end": 151
          },
          "start": 147,
          "end": 151
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 185,
                "end": 186
              },
              "operator": "||",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 190,
                  "end": 195
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 190,
                "end": 197
              },
              "start": 185,
              "end": 197
            },
            "start": 178,
            "end": 198
          }
        ],
        "start": 153,
        "end": 200
      },
      "expression": false,
      "start": 132,
      "end": 200
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 211,
        "end": 213
      },
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
              "type": "TSUnknownKeyword",
              "start": 217,
              "end": 224
            },
            "start": 215,
            "end": 224
          },
          "start": 214,
          "end": 224
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 236,
                  "end": 237
                },
                "init": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 240,
                    "end": 241
                  },
                  "start": 240,
                  "end": 242
                },
                "definite": false,
                "start": 236,
                "end": 242
              }
            ],
            "declare": false,
            "start": 232,
            "end": 243
          }
        ],
        "start": 226,
        "end": 252
      },
      "expression": false,
      "start": 202,
      "end": 252
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 263,
        "end": 265
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 267
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 278,
                        "end": 279
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 281,
                          "end": 287
                        },
                        "start": 279,
                        "end": 287
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 278,
                      "end": 287
                    }
                  ],
                  "start": 276,
                  "end": 289
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 292,
                  "end": 301
                }
              ],
              "start": 276,
              "end": 301
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 266,
            "end": 301
          }
        ],
        "start": 265,
        "end": 302
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 308,
                "end": 309
              },
              "typeArguments": null,
              "start": 308,
              "end": 309
            },
            "start": 306,
            "end": 309
          },
          "start": 303,
          "end": 309
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 321,
                    "end": 324
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 326,
                    "end": 327
                  },
                  "optional": true,
                  "computed": false,
                  "start": 321,
                  "end": 327
                },
                "start": 321,
                "end": 327
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 332,
                "end": 339
              },
              "start": 321,
              "end": 339
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 351,
                    "end": 354
                  },
                  "directive": null,
                  "start": 351,
                  "end": 355
                }
              ],
              "start": 341,
              "end": 380
            },
            "alternate": null,
            "start": 317,
            "end": 380
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "ChainExpression",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 389,
                  "end": 392
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 394,
                  "end": 395
                },
                "optional": true,
                "computed": false,
                "start": 389,
                "end": 395
              },
              "start": 389,
              "end": 395
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 407,
                    "end": 410
                  },
                  "directive": null,
                  "start": 407,
                  "end": 411
                }
              ],
              "start": 397,
              "end": 436
            },
            "alternate": null,
            "start": 385,
            "end": 436
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 452,
                      "end": 455
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 457,
                      "end": 458
                    },
                    "optional": true,
                    "computed": false,
                    "start": 452,
                    "end": 458
                  },
                  "start": 452,
                  "end": 458
                },
                "prefix": true,
                "start": 445,
                "end": 458
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 463,
                "end": 471
              },
              "start": 445,
              "end": 471
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 483,
                    "end": 486
                  },
                  "directive": null,
                  "start": 483,
                  "end": 487
                }
              ],
              "start": 473,
              "end": 512
            },
            "alternate": null,
            "start": 441,
            "end": 512
          }
        ],
        "start": 311,
        "end": 514
      },
      "expression": false,
      "start": 254,
      "end": 514
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 522,
        "end": 523
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 530,
              "end": 531
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 534,
              "end": 541
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 530,
            "end": 542
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 547,
              "end": 550
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
                          "name": "zz",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 567,
                          "end": 569
                        },
                        "init": {
                          "type": "ChainExpression",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 572,
                              "end": 576
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 578,
                              "end": 579
                            },
                            "optional": true,
                            "computed": false,
                            "start": 572,
                            "end": 579
                          },
                          "start": 572,
                          "end": 579
                        },
                        "definite": false,
                        "start": 567,
                        "end": 579
                      }
                    ],
                    "declare": false,
                    "start": 563,
                    "end": 580
                  }
                ],
                "start": 553,
                "end": 597
              },
              "expression": false,
              "start": 550,
              "end": 597
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 547,
            "end": 597
          }
        ],
        "start": 524,
        "end": 599
      },
      "abstract": false,
      "declare": false,
      "start": 516,
      "end": 599
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 599
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
    "value": "f1",
    "start": 9,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "let",
    "start": 27,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 37,
    "end": 39
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 40,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 80,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 89,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 98,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 104,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 110,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 116,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 120,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "function",
    "start": 132,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 141,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 153,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 178,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 187,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 190,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 199,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 202,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 211,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 217,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 226,
    "end": 227
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 232,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "!",
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
    "type": "Punctuator",
    "value": "}",
    "start": 251,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 254,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 263,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 266,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 268,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 281,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 292,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 303,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 311,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 317,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 321,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 324,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 328,
    "end": 331
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 332,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 351,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 379,
    "end": 380
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 385,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 389,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 392,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 407,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 435,
    "end": 436
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 441,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 444,
    "end": 445
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 445,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 452,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 455,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 459,
    "end": 462
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 463,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 483,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 513,
    "end": 514
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 516,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 532,
    "end": 533
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 534,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 547,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 553,
    "end": 554
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 563,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "zz",
    "start": 567,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 570,
    "end": 571
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 572,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 576,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 598,
    "end": 599
  }
]
```
