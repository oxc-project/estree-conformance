__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Iterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 17,
                  "end": 25
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 26,
                      "end": 32
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 34,
                      "end": 43
                    }
                  ],
                  "start": 25,
                  "end": 44
                },
                "start": 17,
                "end": 44
              },
              "start": 15,
              "end": 44
            },
            "start": 14,
            "end": 44
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 44
        }
      ],
      "declare": true,
      "start": 0,
      "end": 45
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
            "name": "io",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IteratorObject",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 64,
                  "end": 78
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 79,
                      "end": 85
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 87,
                      "end": 96
                    },
                    {
                      "type": "TSUnknownKeyword",
                      "start": 98,
                      "end": 105
                    }
                  ],
                  "start": 78,
                  "end": 106
                },
                "start": 64,
                "end": 106
              },
              "start": 62,
              "end": 106
            },
            "start": 60,
            "end": 106
          },
          "init": null,
          "definite": false,
          "start": 60,
          "end": 106
        }
      ],
      "declare": true,
      "start": 46,
      "end": 107
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
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Generator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 125,
                  "end": 134
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 135,
                      "end": 141
                    },
                    {
                      "type": "TSVoidKeyword",
                      "start": 143,
                      "end": 147
                    }
                  ],
                  "start": 134,
                  "end": 148
                },
                "start": 125,
                "end": 148
              },
              "start": 123,
              "end": 148
            },
            "start": 122,
            "end": 148
          },
          "init": null,
          "definite": false,
          "start": 122,
          "end": 148
        }
      ],
      "declare": true,
      "start": 108,
      "end": 149
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyIterator",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 167
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Iterator",
        "optional": false,
        "typeAnnotation": null,
        "start": 176,
        "end": 184
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 185,
            "end": 191
          }
        ],
        "start": 184,
        "end": 192
      },
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
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 203
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "done",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 217,
                            "end": 221
                          },
                          "value": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 223,
                            "end": 227
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 217,
                          "end": 227
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
                            "start": 229,
                            "end": 234
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 236,
                            "end": 245
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 229,
                          "end": 245
                        }
                      ],
                      "start": 215,
                      "end": 247
                    },
                    "start": 208,
                    "end": 248
                  }
                ],
                "start": 206,
                "end": 250
              },
              "expression": false,
              "start": 203,
              "end": 250
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 199,
            "end": 250
          }
        ],
        "start": 193,
        "end": 252
      },
      "abstract": false,
      "declare": false,
      "start": 151,
      "end": 252
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 269,
        "end": 270
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
            "type": "VariableDeclaration",
            "kind": "await using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "it0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 310,
                  "end": 313
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "io",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 318
                },
                "definite": false,
                "start": 310,
                "end": 318
              }
            ],
            "declare": false,
            "start": 298,
            "end": 319
          },
          {
            "type": "VariableDeclaration",
            "kind": "await using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "it1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 336,
                  "end": 339
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 342,
                  "end": 343
                },
                "definite": false,
                "start": 336,
                "end": 343
              }
            ],
            "declare": false,
            "start": 324,
            "end": 344
          },
          {
            "type": "VariableDeclaration",
            "kind": "await using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "it2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 361,
                  "end": 364
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Iterator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 367,
                      "end": 375
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "from",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 376,
                      "end": 380
                    },
                    "optional": false,
                    "computed": false,
                    "start": 367,
                    "end": 380
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 381,
                      "end": 382
                    }
                  ],
                  "optional": false,
                  "start": 367,
                  "end": 383
                },
                "definite": false,
                "start": 361,
                "end": 383
              }
            ],
            "declare": false,
            "start": 349,
            "end": 383
          },
          {
            "type": "VariableDeclaration",
            "kind": "await using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "it3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 400,
                  "end": 403
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyIterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 410,
                    "end": 420
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 406,
                  "end": 422
                },
                "definite": false,
                "start": 400,
                "end": 422
              }
            ],
            "declare": false,
            "start": 388,
            "end": 423
          },
          {
            "type": "VariableDeclaration",
            "kind": "await using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "it4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 440,
                  "end": 443
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 446,
                      "end": 448
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "values",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 449,
                      "end": 455
                    },
                    "optional": false,
                    "computed": false,
                    "start": 446,
                    "end": 455
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 446,
                  "end": 457
                },
                "definite": false,
                "start": 440,
                "end": 457
              }
            ],
            "declare": false,
            "start": 428,
            "end": 458
          },
          {
            "type": "VariableDeclaration",
            "kind": "await using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "it5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 475,
                  "end": 478
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Map",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 485,
                        "end": 488
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 489,
                            "end": 495
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 497,
                            "end": 503
                          }
                        ],
                        "start": 488,
                        "end": 504
                      },
                      "arguments": [],
                      "start": 481,
                      "end": 506
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "entries",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 507,
                      "end": 514
                    },
                    "optional": false,
                    "computed": false,
                    "start": 481,
                    "end": 514
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 481,
                  "end": 516
                },
                "definite": false,
                "start": 475,
                "end": 516
              }
            ],
            "declare": false,
            "start": 463,
            "end": 517
          },
          {
            "type": "VariableDeclaration",
            "kind": "await using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "it6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 534,
                  "end": 537
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Set",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 544,
                        "end": 547
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 548,
                            "end": 554
                          }
                        ],
                        "start": 547,
                        "end": 555
                      },
                      "arguments": [],
                      "start": 540,
                      "end": 557
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "keys",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 558,
                      "end": 562
                    },
                    "optional": false,
                    "computed": false,
                    "start": 540,
                    "end": 562
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 540,
                  "end": 564
                },
                "definite": false,
                "start": 534,
                "end": 564
              }
            ],
            "declare": false,
            "start": 522,
            "end": 565
          },
          {
            "type": "VariableDeclaration",
            "kind": "await using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "it7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 602,
                  "end": 605
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 608,
                  "end": 609
                },
                "definite": false,
                "start": 602,
                "end": 609
              }
            ],
            "declare": false,
            "start": 590,
            "end": 610
          }
        ],
        "start": 273,
        "end": 612
      },
      "expression": false,
      "start": 254,
      "end": 612
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 612
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
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 17,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 26,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 34,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 46,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 54,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "io",
    "start": 60,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "IteratorObject",
    "start": 64,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "<",
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
    "type": "Identifier",
    "value": "undefined",
    "start": 87,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 98,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 108,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 116,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 125,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 135,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 143,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 151,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "MyIterator",
    "start": 157,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 168,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 176,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 185,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 199,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 208,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 217,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 221,
    "end": 222
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 223,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 229,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 236,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 254,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 260,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 298,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 304,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "it0",
    "start": 310,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "io",
    "start": 316,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 324,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 330,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "it1",
    "start": 336,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 349,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 355,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "it2",
    "start": 361,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 367,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 376,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 388,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 394,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "it3",
    "start": 400,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 404,
    "end": 405
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 406,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "MyIterator",
    "start": 410,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 428,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 434,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "it4",
    "start": 440,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 449,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 463,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 469,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "it5",
    "start": 475,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 479,
    "end": 480
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 481,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 485,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 489,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 497,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "entries",
    "start": 507,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 522,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 528,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "it6",
    "start": 534,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 538,
    "end": 539
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 540,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 544,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 548,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 558,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 562,
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
    "value": ";",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 590,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 596,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "it7",
    "start": 602,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 611,
    "end": 612
  }
]
```
