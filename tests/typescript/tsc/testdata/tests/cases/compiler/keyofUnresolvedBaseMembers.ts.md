__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "STModel",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 81
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TAttrs",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 88
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 97,
              "end": 99
            },
            "default": {
              "type": "TSAnyKeyword",
              "start": 102,
              "end": 105
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 82,
            "end": 105
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TCreate",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 114
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 123,
              "end": 125
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TAttrs",
                "optional": false,
                "typeAnnotation": null,
                "start": 128,
                "end": 134
              },
              "typeArguments": null,
              "start": 128,
              "end": 134
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 107,
            "end": 134
          }
        ],
        "start": 81,
        "end": 135
      },
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
              "name": "$add",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 144
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "propertyKey",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 160,
                        "end": 166
                      },
                      "start": 158,
                      "end": 166
                    },
                    "start": 147,
                    "end": 166
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 171,
                    "end": 175
                  },
                  "start": 168,
                  "end": 175
                },
                "start": 146,
                "end": 175
              },
              "start": 144,
              "end": 175
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 140,
            "end": 176
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "$set",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 183
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "propertyKey",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSThisType",
                          "start": 205,
                          "end": 209
                        },
                        "start": 199,
                        "end": 209
                      },
                      "start": 197,
                      "end": 209
                    },
                    "start": 186,
                    "end": 209
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 214,
                    "end": 218
                  },
                  "start": 211,
                  "end": 218
                },
                "start": 185,
                "end": 218
              },
              "start": 183,
              "end": 218
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 179,
            "end": 219
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 226
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TAttrs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 228,
                  "end": 234
                },
                "typeArguments": null,
                "start": 228,
                "end": 234
              },
              "start": 226,
              "end": 234
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 222,
            "end": 235
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "newAttrs",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 246
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TCreate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 248,
                  "end": 255
                },
                "typeArguments": null,
                "start": 248,
                "end": 255
              },
              "start": 246,
              "end": 255
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 238,
            "end": 256
          }
        ],
        "start": 136,
        "end": 258
      },
      "abstract": false,
      "declare": true,
      "start": 60,
      "end": 258
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 270,
        "end": 275
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 278,
              "end": 280
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 282,
                "end": 288
              },
              "start": 280,
              "end": 288
            },
            "accessibility": null,
            "static": false,
            "start": 278,
            "end": 288
          }
        ],
        "start": 276,
        "end": 290
      },
      "declare": false,
      "start": 260,
      "end": 290
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Attrs",
        "optional": false,
        "typeAnnotation": null,
        "start": 297,
        "end": 302
      },
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
              "start": 303,
              "end": 304
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 313,
              "end": 315
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 303,
            "end": 315
          }
        ],
        "start": 302,
        "end": 316
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 322,
              "end": 323
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 333,
                  "end": 334
                },
                "typeArguments": null,
                "start": 333,
                "end": 334
              },
              "start": 327,
              "end": 334
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 337,
                  "end": 338
                },
                "typeArguments": null,
                "start": 337,
                "end": 338
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 339,
                  "end": 340
                },
                "typeArguments": null,
                "start": 339,
                "end": 340
              },
              "start": 337,
              "end": 341
            },
            "optional": false,
            "readonly": null,
            "start": 319,
            "end": 343
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "IBase",
              "optional": false,
              "typeAnnotation": null,
              "start": 346,
              "end": 351
            },
            "typeArguments": null,
            "start": 346,
            "end": 351
          }
        ],
        "start": 319,
        "end": 351
      },
      "declare": false,
      "start": 292,
      "end": 352
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CreateAttrs",
        "optional": false,
        "typeAnnotation": null,
        "start": 358,
        "end": 369
      },
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
              "start": 370,
              "end": 371
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 380,
              "end": 382
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 370,
            "end": 382
          }
        ],
        "start": 369,
        "end": 383
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "typeAnnotation": null,
          "start": 386,
          "end": 393
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Attrs",
                "optional": false,
                "typeAnnotation": null,
                "start": 394,
                "end": 399
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 400,
                      "end": 401
                    },
                    "typeArguments": null,
                    "start": 400,
                    "end": 401
                  }
                ],
                "start": 399,
                "end": 402
              },
              "start": 394,
              "end": 402
            }
          ],
          "start": 393,
          "end": 403
        },
        "start": 386,
        "end": 403
      },
      "declare": false,
      "start": 353,
      "end": 404
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseModel",
        "optional": false,
        "typeAnnotation": null,
        "start": 421,
        "end": 430
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "MA",
              "optional": false,
              "typeAnnotation": null,
              "start": 431,
              "end": 433
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 442,
              "end": 444
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 431,
            "end": 444
          }
        ],
        "start": 430,
        "end": 445
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "STModel",
        "optional": false,
        "typeAnnotation": null,
        "start": 454,
        "end": 461
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Attrs",
              "optional": false,
              "typeAnnotation": null,
              "start": 462,
              "end": 467
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 468,
                    "end": 470
                  },
                  "typeArguments": null,
                  "start": 468,
                  "end": 470
                }
              ],
              "start": 467,
              "end": 471
            },
            "start": 462,
            "end": 471
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "CreateAttrs",
              "optional": false,
              "typeAnnotation": null,
              "start": 473,
              "end": 484
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 485,
                    "end": 487
                  },
                  "typeArguments": null,
                  "start": 485,
                  "end": 487
                }
              ],
              "start": 484,
              "end": 488
            },
            "start": 473,
            "end": 488
          }
        ],
        "start": 461,
        "end": 489
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 490,
        "end": 492
      },
      "abstract": true,
      "declare": false,
      "start": 406,
      "end": 492
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 500,
        "end": 504
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseModel",
        "optional": false,
        "typeAnnotation": null,
        "start": 513,
        "end": 522
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "_Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 523,
              "end": 527
            },
            "typeArguments": null,
            "start": 523,
            "end": 527
          }
        ],
        "start": 522,
        "end": 528
      },
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 541,
              "end": 545
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 547,
                "end": 553
              },
              "start": 545,
              "end": 553
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": true,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 533,
            "end": 554
          }
        ],
        "start": 529,
        "end": 556
      },
      "abstract": false,
      "declare": false,
      "start": 494,
      "end": 556
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
            "name": "ctor",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "STModel",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 580,
                      "end": 587
                    },
                    "typeArguments": null,
                    "start": 580,
                    "end": 587
                  },
                  "start": 577,
                  "end": 587
                },
                "start": 570,
                "end": 587
              },
              "start": 568,
              "end": 587
            },
            "start": 564,
            "end": 587
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "_Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 590,
            "end": 594
          },
          "definite": false,
          "start": 564,
          "end": 594
        }
      ],
      "declare": false,
      "start": 558,
      "end": 595
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
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 596,
            "end": 603
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 604,
            "end": 607
          },
          "optional": false,
          "computed": false,
          "start": 596,
          "end": 607
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ctor",
            "optional": false,
            "typeAnnotation": null,
            "start": 608,
            "end": 612
          }
        ],
        "optional": false,
        "start": 596,
        "end": 613
      },
      "directive": null,
      "start": 596,
      "end": 614
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 60,
  "end": 614
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 60,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 68,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "STModel",
    "start": 74,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "TAttrs",
    "start": 82,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 89,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 102,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "TCreate",
    "start": 107,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 115,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "TAttrs",
    "start": 128,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "$add",
    "start": 140,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "propertyKey",
    "start": 147,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 160,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 168,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 171,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "$set",
    "start": 179,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "propertyKey",
    "start": 186,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 199,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 205,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 211,
    "end": 213
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 214,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 222,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "TAttrs",
    "start": 228,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "newAttrs",
    "start": 238,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "TCreate",
    "start": 248,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 257,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 260,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "IBase",
    "start": 270,
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
    "value": "id",
    "start": 278,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 282,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 292,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "Attrs",
    "start": 297,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 305,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 324,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 327,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "&",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "IBase",
    "start": 346,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 353,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "CreateAttrs",
    "start": 358,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 370,
    "end": 371
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 372,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 386,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "Attrs",
    "start": 394,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 406,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 415,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "BaseModel",
    "start": 421,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "MA",
    "start": 431,
    "end": 433
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 434,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 444,
    "end": 445
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 446,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "STModel",
    "start": 454,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "Attrs",
    "start": 462,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "MA",
    "start": 468,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "CreateAttrs",
    "start": 473,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "MA",
    "start": 485,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 491,
    "end": 492
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 494,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "_Foo",
    "start": 500,
    "end": 504
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 505,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "BaseModel",
    "start": 513,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "_Foo",
    "start": 523,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "declare",
    "start": 533,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 541,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 547,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 555,
    "end": 556
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 558,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "ctor",
    "start": 564,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 568,
    "end": 569
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 570,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 577,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "STModel",
    "start": 580,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "_Foo",
    "start": 590,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 596,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 604,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "ctor",
    "start": 608,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 613,
    "end": 614
  }
]
```
