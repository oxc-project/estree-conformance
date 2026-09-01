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
        "name": "SFC",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 15
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 18,
              "end": 20
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 14,
            "end": 20
          }
        ],
        "start": 13,
        "end": 21
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 36,
                          "end": 37
                        },
                        "typeArguments": null,
                        "start": 36,
                        "end": 37
                      },
                      {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "children",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 42,
                              "end": 50
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 53,
                                "end": 56
                              },
                              "start": 51,
                              "end": 56
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 42,
                            "end": 56
                          }
                        ],
                        "start": 40,
                        "end": 58
                      }
                    ],
                    "start": 36,
                    "end": 58
                  },
                  "start": 34,
                  "end": 58
                },
                "start": 29,
                "end": 58
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 61,
                    "end": 64
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 67,
                    "end": 71
                  }
                ],
                "start": 61,
                "end": 71
              },
              "start": 59,
              "end": 71
            },
            "start": 28,
            "end": 72
          }
        ],
        "start": 22,
        "end": 74
      },
      "declare": false,
      "start": 0,
      "end": 74
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 91
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 102
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "Apollo",
                      "raw": "\"Apollo\"",
                      "start": 104,
                      "end": 112
                    },
                    "start": 104,
                    "end": 112
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "Artemis",
                      "raw": "\"Artemis\"",
                      "start": 115,
                      "end": 124
                    },
                    "start": 115,
                    "end": 124
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "Dionysus",
                      "raw": "\"Dionysus\"",
                      "start": 127,
                      "end": 137
                    },
                    "start": 127,
                    "end": 137
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "Persephone",
                      "raw": "\"Persephone\"",
                      "start": 140,
                      "end": 152
                    },
                    "start": 140,
                    "end": 152
                  }
                ],
                "start": 104,
                "end": 152
              },
              "start": 102,
              "end": 152
            },
            "accessibility": null,
            "static": false,
            "start": 98,
            "end": 153
          }
        ],
        "start": 92,
        "end": 155
      },
      "declare": false,
      "start": 76,
      "end": 155
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
            "name": "Parent",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SFC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 171,
                  "end": 174
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 175,
                        "end": 180
                      },
                      "typeArguments": null,
                      "start": 175,
                      "end": 180
                    }
                  ],
                  "start": 174,
                  "end": 181
                },
                "start": 171,
                "end": 181
              },
              "start": 169,
              "end": 181
            },
            "start": 163,
            "end": 181
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 191,
                      "end": 199
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 191,
                      "end": 199
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 191,
                    "end": 199
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 205,
                      "end": 209
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 205,
                        "end": 209
                      },
                      "right": {
                        "type": "Literal",
                        "value": "Artemis",
                        "raw": "\"Artemis\"",
                        "start": 212,
                        "end": 221
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 205,
                      "end": 221
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 205,
                    "end": 221
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 230,
                      "end": 235
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 227,
                    "end": 235
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 185,
                "end": 237
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Child",
                "optional": false,
                "typeAnnotation": null,
                "start": 242,
                "end": 247
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 249,
                        "end": 253
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 249,
                        "end": 253
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 249,
                      "end": 253
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 258,
                        "end": 263
                      },
                      "start": 255,
                      "end": 263
                    }
                  ],
                  "start": 248,
                  "end": 264
                }
              ],
              "optional": false,
              "start": 242,
              "end": 265
            },
            "id": null,
            "generator": false,
            "start": 184,
            "end": 265
          },
          "definite": false,
          "start": 163,
          "end": 265
        }
      ],
      "declare": false,
      "start": 157,
      "end": 266
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
            "name": "Child",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SFC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 281,
                  "end": 284
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 285,
                        "end": 290
                      },
                      "typeArguments": null,
                      "start": 285,
                      "end": 290
                    }
                  ],
                  "start": 284,
                  "end": 291
                },
                "start": 281,
                "end": 291
              },
              "start": 279,
              "end": 291
            },
            "start": 274,
            "end": 291
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 301,
                      "end": 309
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 301,
                      "end": 309
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 301,
                    "end": 309
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 315,
                      "end": 319
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 315,
                        "end": 319
                      },
                      "right": {
                        "type": "Literal",
                        "value": "Artemis",
                        "raw": "\"Artemis\"",
                        "start": 322,
                        "end": 331
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 315,
                      "end": 331
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 315,
                    "end": 331
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 340,
                      "end": 345
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 337,
                    "end": 345
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 295,
                "end": 347
              }
            ],
            "returnType": null,
            "body": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "name: ",
                    "cooked": "name: "
                  },
                  "tail": false,
                  "start": 352,
                  "end": 361
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " props: ",
                    "cooked": " props: "
                  },
                  "tail": false,
                  "start": 365,
                  "end": 376
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 397,
                  "end": 399
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 361,
                  "end": 365
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "JSON",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 376,
                      "end": 380
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "stringify",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 381,
                      "end": 390
                    },
                    "optional": false,
                    "computed": false,
                    "start": 376,
                    "end": 390
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 391,
                      "end": 396
                    }
                  ],
                  "optional": false,
                  "start": 376,
                  "end": 397
                }
              ],
              "start": 352,
              "end": 399
            },
            "id": null,
            "generator": false,
            "start": 294,
            "end": 399
          },
          "definite": false,
          "start": 274,
          "end": 399
        }
      ],
      "declare": false,
      "start": 268,
      "end": 400
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 441,
        "end": 442
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "as",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 451,
                        "end": 457
                      },
                      "start": 451,
                      "end": 459
                    },
                    "start": 449,
                    "end": 459
                  },
                  "start": 447,
                  "end": 459
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 464,
                  "end": 468
                },
                "start": 461,
                "end": 468
              },
              "start": 446,
              "end": 468
            },
            "start": 444,
            "end": 468
          },
          "start": 443,
          "end": 468
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 471,
          "end": 475
        },
        "start": 469,
        "end": 475
      },
      "body": null,
      "expression": false,
      "start": 424,
      "end": 475
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 476,
          "end": 477
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 480,
                    "end": 482
                  },
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 484,
                      "end": 486
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 489,
                      "end": 498
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 484,
                    "end": 498
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 479,
                "end": 499
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 504,
              "end": 513
            },
            "id": null,
            "generator": false,
            "start": 478,
            "end": 513
          }
        ],
        "optional": false,
        "start": 476,
        "end": 514
      },
      "directive": null,
      "start": 476,
      "end": 514
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 514
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
    "value": "SFC",
    "start": 10,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Punctuator",
    "value": "(",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 29,
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
    "value": "P",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 42,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 53,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 61,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 65,
    "end": 66
  },
  {
    "type": "Null",
    "value": "null",
    "start": 67,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 76,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 86,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 98,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103
  },
  {
    "type": "String",
    "value": "\"Apollo\"",
    "start": 104,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 113,
    "end": 114
  },
  {
    "type": "String",
    "value": "\"Artemis\"",
    "start": 115,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 125,
    "end": 126
  },
  {
    "type": "String",
    "value": "\"Dionysus\"",
    "start": 127,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 138,
    "end": 139
  },
  {
    "type": "String",
    "value": "\"Persephone\"",
    "start": 140,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 154,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 157,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "Parent",
    "start": 163,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "SFC",
    "start": 171,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 175,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 191,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 205,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 210,
    "end": 211
  },
  {
    "type": "String",
    "value": "\"Artemis\"",
    "start": 212,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 227,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 230,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 239,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "Child",
    "start": 242,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 249,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 255,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 258,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 265,
    "end": 266
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 268,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "Child",
    "start": 274,
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
    "value": "SFC",
    "start": 281,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 285,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 301,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 315,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 320,
    "end": 321
  },
  {
    "type": "String",
    "value": "\"Artemis\"",
    "start": 322,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 337,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 340,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 349,
    "end": 351
  },
  {
    "type": "Template",
    "value": "`name: ${",
    "start": 352,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 361,
    "end": 365
  },
  {
    "type": "Template",
    "value": "} props: ${",
    "start": 365,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 376,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "stringify",
    "start": 381,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 391,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 396,
    "end": 397
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 397,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 424,
    "end": 431
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 432,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 447,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 451,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 461,
    "end": 463
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 464,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 469,
    "end": 470
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 471,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "_1",
    "start": 480,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "_2",
    "start": 484,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 489,
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
    "value": ")",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 501,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 504,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 513,
    "end": 514
  }
]
```
