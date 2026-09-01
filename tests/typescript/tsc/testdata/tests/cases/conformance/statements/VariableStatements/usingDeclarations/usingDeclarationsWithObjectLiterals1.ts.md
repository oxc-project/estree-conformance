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
        "name": "MyDisposable",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 22
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 32
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 34,
                "end": 40
              },
              "start": 32,
              "end": 40
            },
            "accessibility": null,
            "static": false,
            "start": 27,
            "end": 41
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 45,
                "end": 51
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "dispose",
                "optional": false,
                "typeAnnotation": null,
                "start": 52,
                "end": 59
              },
              "optional": false,
              "computed": false,
              "start": 45,
              "end": 59
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 64,
                "end": 68
              },
              "start": 62,
              "end": 68
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 44,
            "end": 69
          }
        ],
        "start": 23,
        "end": 71
      },
      "declare": false,
      "start": 0,
      "end": 71
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "using",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 84
              },
              "init": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 90,
                        "end": 96
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "dispose",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 97,
                        "end": 104
                      },
                      "optional": false,
                      "computed": false,
                      "start": 90,
                      "end": 104
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
                        "start": 108,
                        "end": 110
                      },
                      "expression": false,
                      "start": 105,
                      "end": 110
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 89,
                    "end": 110
                  }
                ],
                "start": 87,
                "end": 112
              },
              "definite": false,
              "start": 83,
              "end": 112
            }
          ],
          "declare": false,
          "start": 77,
          "end": 113
        }
      ],
      "start": 73,
      "end": 115
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "using",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 128
              },
              "init": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 134,
                        "end": 140
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "dispose",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 141,
                        "end": 148
                      },
                      "optional": false,
                      "computed": false,
                      "start": 134,
                      "end": 148
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
                        "start": 152,
                        "end": 154
                      },
                      "expression": false,
                      "start": 149,
                      "end": 154
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 133,
                    "end": 154
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 156,
                      "end": 161
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 163,
                      "end": 164
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 156,
                    "end": 164
                  }
                ],
                "start": 131,
                "end": 166
              },
              "definite": false,
              "start": 127,
              "end": 166
            }
          ],
          "declare": false,
          "start": 121,
          "end": 167
        }
      ],
      "start": 117,
      "end": 169
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "using",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyDisposable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 184,
                      "end": 196
                    },
                    "typeArguments": null,
                    "start": 184,
                    "end": 196
                  },
                  "start": 182,
                  "end": 196
                },
                "start": 181,
                "end": 196
              },
              "init": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 202,
                        "end": 208
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "dispose",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 209,
                        "end": 216
                      },
                      "optional": false,
                      "computed": false,
                      "start": 202,
                      "end": 216
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
                        "start": 220,
                        "end": 222
                      },
                      "expression": false,
                      "start": 217,
                      "end": 222
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 201,
                    "end": 222
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 224,
                      "end": 229
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 231,
                      "end": 232
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 224,
                    "end": 232
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "extra",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 234,
                      "end": 239
                    },
                    "value": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 241,
                      "end": 246
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 234,
                    "end": 246
                  }
                ],
                "start": 199,
                "end": 248
              },
              "definite": false,
              "start": 181,
              "end": 248
            }
          ],
          "declare": false,
          "start": 175,
          "end": 249
        }
      ],
      "start": 171,
      "end": 251
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyAsyncDisposable",
        "optional": false,
        "typeAnnotation": null,
        "start": 263,
        "end": 280
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 290
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 292,
                "end": 298
              },
              "start": 290,
              "end": 298
            },
            "accessibility": null,
            "static": false,
            "start": 285,
            "end": 299
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 303,
                "end": 309
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "asyncDispose",
                "optional": false,
                "typeAnnotation": null,
                "start": 310,
                "end": 322
              },
              "optional": false,
              "computed": false,
              "start": 303,
              "end": 322
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 327,
                  "end": 334
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 335,
                      "end": 339
                    }
                  ],
                  "start": 334,
                  "end": 340
                },
                "start": 327,
                "end": 340
              },
              "start": 325,
              "end": 340
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 302,
            "end": 341
          }
        ],
        "start": 281,
        "end": 343
      },
      "declare": false,
      "start": 253,
      "end": 343
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 360,
        "end": 361
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "BlockStatement",
            "body": [
              {
                "type": "VariableDeclaration",
                "kind": "await using",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 386,
                      "end": 387
                    },
                    "init": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Symbol",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 399,
                              "end": 405
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "asyncDispose",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 406,
                              "end": 418
                            },
                            "optional": false,
                            "computed": false,
                            "start": 399,
                            "end": 418
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "id": null,
                            "generator": false,
                            "async": true,
                            "declare": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 422,
                              "end": 424
                            },
                            "expression": false,
                            "start": 419,
                            "end": 424
                          },
                          "method": true,
                          "shorthand": false,
                          "computed": true,
                          "optional": false,
                          "start": 392,
                          "end": 424
                        }
                      ],
                      "start": 390,
                      "end": 426
                    },
                    "definite": false,
                    "start": 386,
                    "end": 426
                  }
                ],
                "declare": false,
                "start": 374,
                "end": 427
              }
            ],
            "start": 368,
            "end": 431
          },
          {
            "type": "BlockStatement",
            "body": [
              {
                "type": "VariableDeclaration",
                "kind": "await using",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 453,
                      "end": 454
                    },
                    "init": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Symbol",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 466,
                              "end": 472
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "asyncDispose",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 473,
                              "end": 485
                            },
                            "optional": false,
                            "computed": false,
                            "start": 466,
                            "end": 485
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "id": null,
                            "generator": false,
                            "async": true,
                            "declare": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 489,
                              "end": 491
                            },
                            "expression": false,
                            "start": 486,
                            "end": 491
                          },
                          "method": true,
                          "shorthand": false,
                          "computed": true,
                          "optional": false,
                          "start": 459,
                          "end": 491
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 493,
                            "end": 498
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 500,
                            "end": 501
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 493,
                          "end": 501
                        }
                      ],
                      "start": 457,
                      "end": 503
                    },
                    "definite": false,
                    "start": 453,
                    "end": 503
                  }
                ],
                "declare": false,
                "start": 441,
                "end": 504
              }
            ],
            "start": 435,
            "end": 508
          },
          {
            "type": "BlockStatement",
            "body": [
              {
                "type": "VariableDeclaration",
                "kind": "await using",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MyAsyncDisposable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 533,
                            "end": 550
                          },
                          "typeArguments": null,
                          "start": 533,
                          "end": 550
                        },
                        "start": 531,
                        "end": 550
                      },
                      "start": 530,
                      "end": 550
                    },
                    "init": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Symbol",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 568,
                              "end": 574
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "asyncDispose",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 575,
                              "end": 587
                            },
                            "optional": false,
                            "computed": false,
                            "start": 568,
                            "end": 587
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "id": null,
                            "generator": false,
                            "async": true,
                            "declare": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 591,
                              "end": 593
                            },
                            "expression": false,
                            "start": 588,
                            "end": 593
                          },
                          "method": true,
                          "shorthand": false,
                          "computed": true,
                          "optional": false,
                          "start": 561,
                          "end": 593
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 601,
                            "end": 606
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 608,
                            "end": 609
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 601,
                          "end": 609
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "extra",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 617,
                            "end": 622
                          },
                          "value": {
                            "type": "Literal",
                            "value": "foo",
                            "raw": "\"foo\"",
                            "start": 624,
                            "end": 629
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 617,
                          "end": 629
                        }
                      ],
                      "start": 553,
                      "end": 636
                    },
                    "definite": false,
                    "start": 530,
                    "end": 636
                  }
                ],
                "declare": false,
                "start": 518,
                "end": 637
              }
            ],
            "start": 512,
            "end": 641
          }
        ],
        "start": 364,
        "end": 643
      },
      "expression": false,
      "start": 345,
      "end": 643
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 645,
      "end": 655
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 655
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
    "value": "MyDisposable",
    "start": 10,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 27,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 34,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 45,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "dispose",
    "start": 52,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 64,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 77,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 90,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "dispose",
    "start": 97,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 121,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 134,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "dispose",
    "start": 141,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 156,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 161,
    "end": 162
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 175,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "MyDisposable",
    "start": 184,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 202,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "dispose",
    "start": 209,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 224,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 229,
    "end": 230
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 231,
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
    "value": "extra",
    "start": 234,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 239,
    "end": 240
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 241,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 253,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "MyAsyncDisposable",
    "start": 263,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 285,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 292,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 303,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "asyncDispose",
    "start": 310,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 327,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 334,
    "end": 335
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 335,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 345,
    "end": 350
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 351,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 374,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 380,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 392,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 399,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "asyncDispose",
    "start": 406,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 441,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 447,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 459,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 466,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "asyncDispose",
    "start": 473,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 493,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 498,
    "end": 499
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Punctuator",
    "value": ";",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 518,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 524,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "MyAsyncDisposable",
    "start": 533,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Identifier",
    "value": "async",
    "start": 561,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 568,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "asyncDispose",
    "start": 575,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 601,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 606,
    "end": 607
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 608,
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
    "value": "extra",
    "start": 617,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 622,
    "end": 623
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 624,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 642,
    "end": 643
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 645,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 654,
    "end": 655
  }
]
```
