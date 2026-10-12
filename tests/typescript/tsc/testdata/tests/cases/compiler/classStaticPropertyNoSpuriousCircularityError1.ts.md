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
        "name": "id",
        "optional": false,
        "typeAnnotation": null,
        "start": 122,
        "end": 124
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
              "start": 125,
              "end": 126
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 125,
            "end": 126
          }
        ],
        "start": 124,
        "end": 127
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
                "start": 131,
                "end": 132
              },
              "typeArguments": null,
              "start": 131,
              "end": 132
            },
            "start": 129,
            "end": 132
          },
          "start": 128,
          "end": 132
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 135,
            "end": 136
          },
          "typeArguments": null,
          "start": 135,
          "end": 136
        },
        "start": 133,
        "end": 136
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 148,
              "end": 149
            },
            "start": 141,
            "end": 149
          }
        ],
        "start": 137,
        "end": 151
      },
      "expression": false,
      "start": 113,
      "end": 151
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
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 162
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 167
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 194,
                        "end": 197
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "id",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 200,
                          "end": 202
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 203,
                            "end": 205
                          }
                        ],
                        "optional": false,
                        "start": 200,
                        "end": 206
                      },
                      "computed": false,
                      "static": true,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": true,
                      "accessibility": null,
                      "start": 178,
                      "end": 206
                    }
                  ],
                  "start": 174,
                  "end": 214
                },
                "abstract": false,
                "declare": false,
                "start": 168,
                "end": 214
              }
            ],
            "optional": false,
            "start": 165,
            "end": 215
          },
          "definite": false,
          "start": 159,
          "end": 215
        }
      ],
      "declare": false,
      "start": 153,
      "end": 215
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 217,
          "end": 220
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 221,
          "end": 224
        },
        "optional": false,
        "computed": false,
        "start": 217,
        "end": 224
      },
      "directive": null,
      "start": 217,
      "end": 224
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
            "name": "Foo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 242
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 245,
              "end": 247
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 265,
                        "end": 268
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "id",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 271,
                          "end": 273
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 274,
                            "end": 276
                          }
                        ],
                        "optional": false,
                        "start": 271,
                        "end": 277
                      },
                      "computed": false,
                      "static": true,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 258,
                      "end": 277
                    }
                  ],
                  "start": 254,
                  "end": 285
                },
                "abstract": false,
                "declare": false,
                "start": 248,
                "end": 285
              }
            ],
            "optional": false,
            "start": 245,
            "end": 286
          },
          "definite": false,
          "start": 238,
          "end": 286
        }
      ],
      "declare": false,
      "start": 232,
      "end": 286
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 288,
          "end": 292
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 293,
          "end": 296
        },
        "optional": false,
        "computed": false,
        "start": 288,
        "end": 296
      },
      "directive": null,
      "start": 288,
      "end": 296
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
            "name": "Foo3",
            "optional": false,
            "typeAnnotation": null,
            "start": 314,
            "end": 318
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 321,
              "end": 323
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 350,
                        "end": 353
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 357,
                            "end": 359
                          }
                        ],
                        "start": 356,
                        "end": 360
                      },
                      "computed": false,
                      "static": true,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": true,
                      "accessibility": null,
                      "start": 334,
                      "end": 361
                    }
                  ],
                  "start": 330,
                  "end": 363
                },
                "abstract": false,
                "declare": false,
                "start": 324,
                "end": 363
              }
            ],
            "optional": false,
            "start": 321,
            "end": 364
          },
          "definite": false,
          "start": 314,
          "end": 364
        }
      ],
      "declare": false,
      "start": 308,
      "end": 365
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
            "name": "Foo4",
            "optional": false,
            "typeAnnotation": null,
            "start": 373,
            "end": 377
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 380,
              "end": 382
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ClassExpression",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 392,
                  "end": 393
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 407,
                        "end": 410
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 413,
                        "end": 415
                      },
                      "computed": false,
                      "static": true,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 400,
                      "end": 416
                    }
                  ],
                  "start": 394,
                  "end": 420
                },
                "abstract": false,
                "declare": false,
                "start": 386,
                "end": 420
              }
            ],
            "optional": false,
            "start": 380,
            "end": 423
          },
          "definite": false,
          "start": 373,
          "end": 423
        }
      ],
      "declare": false,
      "start": 367,
      "end": 424
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo4",
          "optional": false,
          "typeAnnotation": null,
          "start": 426,
          "end": 430
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 431,
          "end": 434
        },
        "optional": false,
        "computed": false,
        "start": 426,
        "end": 434
      },
      "directive": null,
      "start": 426,
      "end": 434
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Circular",
        "optional": false,
        "typeAnnotation": null,
        "start": 448,
        "end": 456
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 468,
              "end": 471
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Circular",
                "optional": false,
                "typeAnnotation": null,
                "start": 474,
                "end": 482
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 483,
                "end": 486
              },
              "optional": false,
              "computed": false,
              "start": 474,
              "end": 486
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 461,
            "end": 487
          }
        ],
        "start": 457,
        "end": 498
      },
      "abstract": false,
      "declare": false,
      "start": 442,
      "end": 498
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
            "name": "Circular2",
            "optional": false,
            "typeAnnotation": null,
            "start": 506,
            "end": 515
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 518,
              "end": 520
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ClassExpression",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 527,
                  "end": 528
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 540,
                        "end": 543
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 546,
                          "end": 547
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 548,
                          "end": 551
                        },
                        "optional": false,
                        "computed": false,
                        "start": 546,
                        "end": 551
                      },
                      "computed": false,
                      "static": true,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 533,
                      "end": 552
                    }
                  ],
                  "start": 529,
                  "end": 563
                },
                "abstract": false,
                "declare": false,
                "start": 521,
                "end": 563
              }
            ],
            "optional": false,
            "start": 518,
            "end": 564
          },
          "definite": false,
          "start": 506,
          "end": 564
        }
      ],
      "declare": false,
      "start": 500,
      "end": 565
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
            "name": "Circular3",
            "optional": false,
            "typeAnnotation": null,
            "start": 573,
            "end": 582
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 585,
              "end": 587
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 605,
                        "end": 608
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Circular3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 611,
                          "end": 620
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 621,
                          "end": 624
                        },
                        "optional": false,
                        "computed": false,
                        "start": 611,
                        "end": 624
                      },
                      "computed": false,
                      "static": true,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 598,
                      "end": 625
                    }
                  ],
                  "start": 594,
                  "end": 636
                },
                "abstract": false,
                "declare": false,
                "start": 588,
                "end": 636
              }
            ],
            "optional": false,
            "start": 585,
            "end": 637
          },
          "definite": false,
          "start": 573,
          "end": 637
        }
      ],
      "declare": false,
      "start": 567,
      "end": 638
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 113,
  "end": 638
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 113,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 122,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 141,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 153,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 159,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 165,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 167,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 168,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 174,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 178,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 185,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 194,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 200,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 202,
    "end": 203
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 203,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 217,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 221,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 232,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "Foo2",
    "start": 238,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 245,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 247,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 248,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 254,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 258,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 265,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 271,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 273,
    "end": 274
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 274,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "Foo2",
    "start": 288,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 293,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 308,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "Foo3",
    "start": 314,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 321,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 323,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 324,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 330,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 334,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 341,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 350,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 356,
    "end": 357
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 357,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 364,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 367,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "Foo4",
    "start": 373,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 380,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 382,
    "end": 383
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 386,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 394,
    "end": 395
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 400,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 407,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "Foo4",
    "start": 426,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 431,
    "end": 434
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 442,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "Circular",
    "start": 448,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 457,
    "end": 458
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 461,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 468,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "Circular",
    "start": 474,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "foo",
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
    "start": 497,
    "end": 498
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 500,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "Circular2",
    "start": 506,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 518,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 520,
    "end": 521
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 521,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 529,
    "end": 530
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 533,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 540,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 548,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "const",
    "start": 567,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "Circular3",
    "start": 573,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 585,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 587,
    "end": 588
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 588,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 594,
    "end": 595
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 598,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 605,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "Circular3",
    "start": 611,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 621,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 637,
    "end": 638
  }
]
```
