__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 27,
          "end": 28
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 29,
                "end": 30
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 29,
              "end": 30
            }
          ],
          "start": 28,
          "end": 31
        },
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
                "start": 38,
                "end": 43
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 45,
                    "end": 46
                  },
                  "typeArguments": null,
                  "start": 45,
                  "end": 46
                },
                "start": 43,
                "end": 46
              },
              "accessibility": null,
              "static": false,
              "start": 38,
              "end": 47
            }
          ],
          "start": 32,
          "end": 49
        },
        "declare": false,
        "start": 17,
        "end": 49
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 10,
      "end": 49
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 62
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 64
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 63,
            "end": 64
          }
        ],
        "start": 62,
        "end": 65
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "values",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 74,
                "end": 75
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 76,
                      "end": 77
                    },
                    "typeArguments": null,
                    "start": 76,
                    "end": 77
                  }
                ],
                "start": 75,
                "end": 78
              },
              "start": 74,
              "end": 78
            },
            "start": 72,
            "end": 78
          },
          "start": 66,
          "end": 78
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 87,
                "end": 88
              },
              "typeArguments": null,
              "start": 87,
              "end": 88
            },
            "start": 85,
            "end": 88
          },
          "start": 80,
          "end": 88
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 92,
          "end": 96
        },
        "start": 90,
        "end": 96
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 97,
        "end": 100
      },
      "expression": false,
      "start": 51,
      "end": 100
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
            "name": "handlers",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 124,
                  "end": 125
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 134,
                              "end": 140
                            },
                            "start": 132,
                            "end": 140
                          },
                          "start": 127,
                          "end": 140
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 145,
                          "end": 149
                        },
                        "start": 142,
                        "end": 149
                      },
                      "start": 126,
                      "end": 149
                    }
                  ],
                  "start": 125,
                  "end": 150
                },
                "start": 124,
                "end": 150
              },
              "start": 122,
              "end": 150
            },
            "start": 114,
            "end": 150
          },
          "init": null,
          "definite": false,
          "start": 114,
          "end": 150
        }
      ],
      "declare": true,
      "start": 102,
      "end": 151
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 152,
          "end": 154
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "handlers",
            "optional": false,
            "typeAnnotation": null,
            "start": 155,
            "end": 163
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 165,
                "end": 170
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "alert",
                "optional": false,
                "typeAnnotation": null,
                "start": 174,
                "end": 179
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 180,
                  "end": 185
                }
              ],
              "optional": false,
              "start": 174,
              "end": 186
            },
            "id": null,
            "generator": false,
            "start": 165,
            "end": 186
          }
        ],
        "optional": false,
        "start": 152,
        "end": 187
      },
      "directive": null,
      "start": 152,
      "end": 188
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 211,
        "end": 220
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
              "start": 221,
              "end": 222
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 221,
            "end": 222
          }
        ],
        "start": 220,
        "end": 223
      },
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
              "name": "initialValues",
              "optional": false,
              "typeAnnotation": null,
              "start": 228,
              "end": 241
            },
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
                  "start": 243,
                  "end": 244
                },
                "typeArguments": null,
                "start": 243,
                "end": 244
              },
              "start": 241,
              "end": 244
            },
            "accessibility": null,
            "static": false,
            "start": 228,
            "end": 245
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nextValues",
              "optional": false,
              "typeAnnotation": null,
              "start": 248,
              "end": 258
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
                    "name": "cur",
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
                          "start": 266,
                          "end": 267
                        },
                        "typeArguments": null,
                        "start": 266,
                        "end": 267
                      },
                      "start": 264,
                      "end": 267
                    },
                    "start": 261,
                    "end": 267
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
                      "start": 272,
                      "end": 273
                    },
                    "typeArguments": null,
                    "start": 272,
                    "end": 273
                  },
                  "start": 269,
                  "end": 273
                },
                "start": 260,
                "end": 273
              },
              "start": 258,
              "end": 273
            },
            "accessibility": null,
            "static": false,
            "start": 248,
            "end": 274
          }
        ],
        "start": 224,
        "end": 276
      },
      "declare": false,
      "start": 201,
      "end": 276
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 291,
        "end": 300
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
              "start": 301,
              "end": 302
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 301,
            "end": 302
          }
        ],
        "start": 300,
        "end": 303
      },
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
              "start": 306,
              "end": 317
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 325,
                        "end": 326
                      },
                      "typeArguments": null,
                      "start": 325,
                      "end": 326
                    },
                    "start": 323,
                    "end": 326
                  },
                  "start": 318,
                  "end": 326
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 317,
              "end": 328
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 306,
            "end": 328
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "props",
              "optional": false,
              "typeAnnotation": null,
              "start": 329,
              "end": 334
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 336,
                  "end": 337
                },
                "typeArguments": null,
                "start": 336,
                "end": 337
              },
              "start": 334,
              "end": 337
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
            "start": 329,
            "end": 338
          }
        ],
        "start": 304,
        "end": 340
      },
      "abstract": false,
      "declare": true,
      "start": 277,
      "end": 340
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 355,
        "end": 371
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Props",
              "optional": false,
              "typeAnnotation": null,
              "start": 372,
              "end": 377
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 380,
              "end": 382
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 372,
            "end": 382
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Values",
              "optional": false,
              "typeAnnotation": null,
              "start": 384,
              "end": 390
            },
            "constraint": null,
            "default": {
              "type": "TSObjectKeyword",
              "start": 393,
              "end": 399
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 384,
            "end": 399
          }
        ],
        "start": 371,
        "end": 400
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 413,
        "end": 422
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Props",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 423,
                  "end": 428
                },
                "typeArguments": null,
                "start": 423,
                "end": 428
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BaseProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 431,
                  "end": 440
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Values",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 441,
                        "end": 447
                      },
                      "typeArguments": null,
                      "start": 441,
                      "end": 447
                    }
                  ],
                  "start": 440,
                  "end": 448
                },
                "start": 431,
                "end": 448
              }
            ],
            "start": 423,
            "end": 448
          }
        ],
        "start": 422,
        "end": 449
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
              "name": "iv",
              "optional": false,
              "typeAnnotation": null,
              "start": 454,
              "end": 456
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Values",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 458,
                  "end": 464
                },
                "typeArguments": null,
                "start": 458,
                "end": 464
              },
              "start": 456,
              "end": 464
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
            "start": 454,
            "end": 465
          }
        ],
        "start": 450,
        "end": 467
      },
      "abstract": false,
      "declare": true,
      "start": 341,
      "end": 467
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "GenericComponent",
          "optional": false,
          "typeAnnotation": null,
          "start": 473,
          "end": 489
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
                  "name": "initialValues",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 492,
                  "end": 505
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 507,
                  "end": 509
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 492,
                "end": 509
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nextValues",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 511,
                  "end": 521
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 523,
                      "end": 526
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 12,
                    "raw": "12",
                    "start": 530,
                    "end": 532
                  },
                  "id": null,
                  "generator": false,
                  "start": 523,
                  "end": 532
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 511,
                "end": 532
              }
            ],
            "start": 490,
            "end": 534
          }
        ],
        "start": 469,
        "end": 535
      },
      "directive": null,
      "start": 469,
      "end": 536
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "useStringOrNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 566,
        "end": 583
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 584,
              "end": 585
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 594,
                  "end": 600
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 603,
                  "end": 609
                }
              ],
              "start": 594,
              "end": 609
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 584,
            "end": 609
          }
        ],
        "start": 583,
        "end": 610
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
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
                "start": 614,
                "end": 615
              },
              "typeArguments": null,
              "start": 614,
              "end": 615
            },
            "start": 612,
            "end": 615
          },
          "start": 611,
          "end": 615
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "useIt",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 624,
                  "end": 625
                },
                "typeArguments": null,
                "start": 624,
                "end": 625
              },
              "extendsType": {
                "type": "TSStringKeyword",
                "start": 634,
                "end": 640
              },
              "trueType": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 648,
                        "end": 654
                      },
                      "start": 646,
                      "end": 654
                    },
                    "start": 645,
                    "end": 654
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 659,
                    "end": 663
                  },
                  "start": 656,
                  "end": 663
                },
                "start": 644,
                "end": 663
              },
              "falseType": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 672,
                        "end": 678
                      },
                      "start": 670,
                      "end": 678
                    },
                    "start": 669,
                    "end": 678
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 683,
                    "end": 687
                  },
                  "start": 680,
                  "end": 687
                },
                "start": 668,
                "end": 687
              },
              "start": 624,
              "end": 688
            },
            "start": 622,
            "end": 688
          },
          "start": 617,
          "end": 688
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 691,
          "end": 695
        },
        "start": 689,
        "end": 695
      },
      "body": null,
      "expression": false,
      "start": 549,
      "end": 696
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "useStringOrNumber",
          "optional": false,
          "typeAnnotation": null,
          "start": 697,
          "end": 714
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 715,
            "end": 717
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 719,
                "end": 722
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 726,
              "end": 728
            },
            "id": null,
            "generator": false,
            "start": 719,
            "end": 728
          }
        ],
        "optional": false,
        "start": 697,
        "end": 729
      },
      "directive": null,
      "start": 697,
      "end": 730
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ActionType",
        "optional": false,
        "typeAnnotation": null,
        "start": 748,
        "end": 758
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
              "start": 759,
              "end": 760
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 759,
            "end": 760
          }
        ],
        "start": 758,
        "end": 761
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 764,
            "end": 770
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
                  "name": "attachPayloadTypeHack",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 775,
                  "end": 796
                },
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
                          "start": 799,
                          "end": 800
                        },
                        "typeArguments": null,
                        "start": 799,
                        "end": 800
                      },
                      {
                        "type": "TSNeverKeyword",
                        "start": 803,
                        "end": 808
                      }
                    ],
                    "start": 799,
                    "end": 808
                  },
                  "start": 797,
                  "end": 808
                },
                "accessibility": null,
                "static": false,
                "start": 775,
                "end": 808
              }
            ],
            "start": 773,
            "end": 810
          }
        ],
        "start": 764,
        "end": 810
      },
      "declare": false,
      "start": 743,
      "end": 810
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Handler",
        "optional": false,
        "typeAnnotation": null,
        "start": 817,
        "end": 824
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 825,
              "end": 826
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 825,
            "end": 826
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 828,
              "end": 829
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 828,
            "end": 829
          }
        ],
        "start": 824,
        "end": 830
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 833,
            "end": 834
          },
          "typeArguments": null,
          "start": 833,
          "end": 834
        },
        "extendsType": {
          "type": "TSVoidKeyword",
          "start": 843,
          "end": 847
        },
        "trueType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "state",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 862,
                    "end": 863
                  },
                  "typeArguments": null,
                  "start": 862,
                  "end": 863
                },
                "start": 860,
                "end": 863
              },
              "start": 855,
              "end": 863
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 868,
                "end": 869
              },
              "typeArguments": null,
              "start": 868,
              "end": 869
            },
            "start": 865,
            "end": 869
          },
          "start": 854,
          "end": 869
        },
        "falseType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "state",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 884,
                    "end": 885
                  },
                  "typeArguments": null,
                  "start": 884,
                  "end": 885
                },
                "start": 882,
                "end": 885
              },
              "start": 877,
              "end": 885
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "payload",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 896,
                    "end": 897
                  },
                  "typeArguments": null,
                  "start": 896,
                  "end": 897
                },
                "start": 894,
                "end": 897
              },
              "start": 887,
              "end": 897
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 902,
                "end": 903
              },
              "typeArguments": null,
              "start": 902,
              "end": 903
            },
            "start": 899,
            "end": 903
          },
          "start": 876,
          "end": 903
        },
        "start": 833,
        "end": 903
      },
      "declare": false,
      "start": 812,
      "end": 903
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ActionHandler",
        "optional": false,
        "typeAnnotation": null,
        "start": 915,
        "end": 928
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 929,
              "end": 930
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 929,
            "end": 930
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 932,
              "end": 933
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 932,
            "end": 933
          }
        ],
        "start": 928,
        "end": 934
      },
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
              "name": "actionType",
              "optional": false,
              "typeAnnotation": null,
              "start": 941,
              "end": 951
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ActionType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 953,
                  "end": 963
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 964,
                        "end": 965
                      },
                      "typeArguments": null,
                      "start": 964,
                      "end": 965
                    }
                  ],
                  "start": 963,
                  "end": 966
                },
                "start": 953,
                "end": 966
              },
              "start": 951,
              "end": 966
            },
            "accessibility": null,
            "static": false,
            "start": 941,
            "end": 966
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "handler",
              "optional": false,
              "typeAnnotation": null,
              "start": 971,
              "end": 978
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Handler",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 980,
                  "end": 987
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 988,
                        "end": 989
                      },
                      "typeArguments": null,
                      "start": 988,
                      "end": 989
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 991,
                        "end": 992
                      },
                      "typeArguments": null,
                      "start": 991,
                      "end": 992
                    }
                  ],
                  "start": 987,
                  "end": 993
                },
                "start": 980,
                "end": 993
              },
              "start": 978,
              "end": 993
            },
            "accessibility": null,
            "static": false,
            "start": 971,
            "end": 993
          }
        ],
        "start": 935,
        "end": 995
      },
      "declare": false,
      "start": 905,
      "end": 995
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "handler",
        "optional": false,
        "typeAnnotation": null,
        "start": 1014,
        "end": 1021
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 1022,
              "end": 1023
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1022,
            "end": 1023
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1025,
              "end": 1026
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1025,
            "end": 1026
          }
        ],
        "start": 1021,
        "end": 1027
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "actionType",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ActionType",
                "optional": false,
                "typeAnnotation": null,
                "start": 1040,
                "end": 1050
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1051,
                      "end": 1052
                    },
                    "typeArguments": null,
                    "start": 1051,
                    "end": 1052
                  }
                ],
                "start": 1050,
                "end": 1053
              },
              "start": 1040,
              "end": 1053
            },
            "start": 1038,
            "end": 1053
          },
          "start": 1028,
          "end": 1053
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "handler",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Handler",
                "optional": false,
                "typeAnnotation": null,
                "start": 1064,
                "end": 1071
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1072,
                      "end": 1073
                    },
                    "typeArguments": null,
                    "start": 1072,
                    "end": 1073
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1075,
                      "end": 1076
                    },
                    "typeArguments": null,
                    "start": 1075,
                    "end": 1076
                  }
                ],
                "start": 1071,
                "end": 1077
              },
              "start": 1064,
              "end": 1077
            },
            "start": 1062,
            "end": 1077
          },
          "start": 1055,
          "end": 1077
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ActionHandler",
            "optional": false,
            "typeAnnotation": null,
            "start": 1080,
            "end": 1093
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1094,
                  "end": 1095
                },
                "typeArguments": null,
                "start": 1094,
                "end": 1095
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1097,
                  "end": 1098
                },
                "typeArguments": null,
                "start": 1097,
                "end": 1098
              }
            ],
            "start": 1093,
            "end": 1099
          },
          "start": 1080,
          "end": 1099
        },
        "start": 1078,
        "end": 1099
      },
      "body": null,
      "expression": false,
      "start": 997,
      "end": 1099
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createReducer",
        "optional": false,
        "typeAnnotation": null,
        "start": 1118,
        "end": 1131
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 1132,
              "end": 1133
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1132,
            "end": 1133
          }
        ],
        "start": 1131,
        "end": 1134
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "defaultState",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 1158,
                "end": 1159
              },
              "typeArguments": null,
              "start": 1158,
              "end": 1159
            },
            "start": 1156,
            "end": 1159
          },
          "start": 1144,
          "end": 1159
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "actionHandlers",
            "optional": false,
            "typeAnnotation": null,
            "start": 1172,
            "end": 1186
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ActionHandler",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1188,
                  "end": 1201
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1202,
                        "end": 1203
                      },
                      "typeArguments": null,
                      "start": 1202,
                      "end": 1203
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 1205,
                      "end": 1208
                    }
                  ],
                  "start": 1201,
                  "end": 1209
                },
                "start": 1188,
                "end": 1209
              },
              "start": 1188,
              "end": 1211
            },
            "start": 1186,
            "end": 1211
          },
          "value": null,
          "start": 1169,
          "end": 1211
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1219,
          "end": 1222
        },
        "start": 1217,
        "end": 1222
      },
      "body": null,
      "expression": false,
      "start": 1101,
      "end": 1222
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AppState",
        "optional": false,
        "typeAnnotation": null,
        "start": 1234,
        "end": 1242
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
              "name": "dummy",
              "optional": false,
              "typeAnnotation": null,
              "start": 1249,
              "end": 1254
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1256,
                "end": 1262
              },
              "start": 1254,
              "end": 1262
            },
            "accessibility": null,
            "static": false,
            "start": 1249,
            "end": 1262
          }
        ],
        "start": 1243,
        "end": 1264
      },
      "declare": false,
      "start": 1224,
      "end": 1264
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
            "name": "defaultState",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AppState",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1286,
                  "end": 1294
                },
                "typeArguments": null,
                "start": 1286,
                "end": 1294
              },
              "start": 1284,
              "end": 1294
            },
            "start": 1272,
            "end": 1294
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dummy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1303,
                  "end": 1308
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1310,
                  "end": 1312
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1303,
                "end": 1312
              }
            ],
            "start": 1297,
            "end": 1314
          },
          "definite": false,
          "start": 1272,
          "end": 1314
        }
      ],
      "declare": false,
      "start": 1266,
      "end": 1314
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
            "name": "NON_VOID_ACTION",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ActionType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1339,
                  "end": 1349
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1350,
                      "end": 1356
                    }
                  ],
                  "start": 1349,
                  "end": 1357
                },
                "start": 1339,
                "end": 1357
              },
              "start": 1337,
              "end": 1357
            },
            "start": 1322,
            "end": 1357
          },
          "init": {
            "type": "Literal",
            "value": "NON_VOID_ACTION",
            "raw": "'NON_VOID_ACTION'",
            "start": 1360,
            "end": 1377
          },
          "definite": false,
          "start": 1322,
          "end": 1377
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "VOID_ACTION",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ActionType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1397,
                  "end": 1407
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 1408,
                      "end": 1412
                    }
                  ],
                  "start": 1407,
                  "end": 1413
                },
                "start": 1397,
                "end": 1413
              },
              "start": 1395,
              "end": 1413
            },
            "start": 1384,
            "end": 1413
          },
          "init": {
            "type": "Literal",
            "value": "VOID_ACTION",
            "raw": "'VOID_ACTION'",
            "start": 1416,
            "end": 1429
          },
          "definite": false,
          "start": 1384,
          "end": 1429
        }
      ],
      "declare": false,
      "start": 1316,
      "end": 1429
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "createReducer",
          "optional": false,
          "typeAnnotation": null,
          "start": 1431,
          "end": 1444
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultState",
            "optional": false,
            "typeAnnotation": null,
            "start": 1450,
            "end": 1462
          },
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "handler",
              "optional": false,
              "typeAnnotation": null,
              "start": 1468,
              "end": 1475
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "NON_VOID_ACTION",
                "optional": false,
                "typeAnnotation": null,
                "start": 1476,
                "end": 1491
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1494,
                    "end": 1499
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_payload",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1501,
                    "end": 1509
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "state",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1514,
                  "end": 1519
                },
                "id": null,
                "generator": false,
                "start": 1493,
                "end": 1519
              }
            ],
            "optional": false,
            "start": 1468,
            "end": 1520
          },
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "handler",
              "optional": false,
              "typeAnnotation": null,
              "start": 1526,
              "end": 1533
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "VOID_ACTION",
                "optional": false,
                "typeAnnotation": null,
                "start": 1534,
                "end": 1545
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1547,
                    "end": 1552
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "state",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1556,
                  "end": 1561
                },
                "id": null,
                "generator": false,
                "start": 1547,
                "end": 1561
              }
            ],
            "optional": false,
            "start": 1526,
            "end": 1562
          }
        ],
        "optional": false,
        "start": 1431,
        "end": 1564
      },
      "directive": null,
      "start": 1431,
      "end": 1564
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R",
        "optional": false,
        "typeAnnotation": null,
        "start": 1582,
        "end": 1583
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1590,
              "end": 1591
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1597,
                        "end": 1603
                      },
                      "start": 1595,
                      "end": 1603
                    },
                    "start": 1594,
                    "end": 1603
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1608,
                    "end": 1612
                  },
                  "start": 1605,
                  "end": 1612
                },
                "start": 1593,
                "end": 1612
              },
              "start": 1591,
              "end": 1612
            },
            "accessibility": null,
            "static": false,
            "start": 1590,
            "end": 1613
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1616,
              "end": 1617
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1623,
                        "end": 1629
                      },
                      "start": 1621,
                      "end": 1629
                    },
                    "start": 1620,
                    "end": 1629
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1634,
                    "end": 1638
                  },
                  "start": 1631,
                  "end": 1638
                },
                "start": 1619,
                "end": 1638
              },
              "start": 1617,
              "end": 1638
            },
            "accessibility": null,
            "static": false,
            "start": 1616,
            "end": 1639
          }
        ],
        "start": 1586,
        "end": 1641
      },
      "declare": false,
      "start": 1577,
      "end": 1642
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "O",
        "optional": false,
        "typeAnnotation": null,
        "start": 1649,
        "end": 1650
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "on",
              "optional": false,
              "typeAnnotation": null,
              "start": 1657,
              "end": 1659
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 1660,
                    "end": 1661
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1676,
                        "end": 1677
                      },
                      "typeArguments": null,
                      "start": 1676,
                      "end": 1677
                    },
                    "start": 1670,
                    "end": 1677
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1660,
                  "end": 1677
                }
              ],
              "start": 1659,
              "end": 1678
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
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1682,
                      "end": 1683
                    },
                    "typeArguments": null,
                    "start": 1682,
                    "end": 1683
                  },
                  "start": 1680,
                  "end": 1683
                },
                "start": 1679,
                "end": 1683
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1695,
                        "end": 1696
                      },
                      "typeArguments": null,
                      "start": 1695,
                      "end": 1696
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1697,
                        "end": 1698
                      },
                      "typeArguments": null,
                      "start": 1697,
                      "end": 1698
                    },
                    "start": 1695,
                    "end": 1699
                  },
                  "start": 1693,
                  "end": 1699
                },
                "start": 1685,
                "end": 1699
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1702,
                "end": 1706
              },
              "start": 1700,
              "end": 1706
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1657,
            "end": 1707
          }
        ],
        "start": 1653,
        "end": 1709
      },
      "declare": false,
      "start": 1644,
      "end": 1710
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1727,
                  "end": 1728
                },
                "typeArguments": null,
                "start": 1727,
                "end": 1728
              },
              "start": 1725,
              "end": 1728
            },
            "start": 1724,
            "end": 1728
          },
          "init": null,
          "definite": false,
          "start": 1724,
          "end": 1728
        }
      ],
      "declare": true,
      "start": 1712,
      "end": 1729
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1730,
            "end": 1731
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "on",
            "optional": false,
            "typeAnnotation": null,
            "start": 1732,
            "end": 1734
          },
          "optional": false,
          "computed": false,
          "start": 1730,
          "end": 1734
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 1735,
            "end": 1738
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1740,
                "end": 1741
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 1745,
              "end": 1747
            },
            "id": null,
            "generator": false,
            "start": 1740,
            "end": 1747
          }
        ],
        "optional": false,
        "start": 1730,
        "end": 1748
      },
      "directive": null,
      "start": 1730,
      "end": 1749
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1772,
        "end": 1774
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Component",
              "optional": false,
              "typeAnnotation": null,
              "start": 1792,
              "end": 1801
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
                    "start": 1802,
                    "end": 1803
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1802,
                  "end": 1803
                }
              ],
              "start": 1801,
              "end": 1804
            },
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
                    "start": 1810,
                    "end": 1821
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
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
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1829,
                              "end": 1830
                            },
                            "typeArguments": null,
                            "start": 1829,
                            "end": 1830
                          },
                          "start": 1827,
                          "end": 1830
                        },
                        "start": 1822,
                        "end": 1830
                      }
                    ],
                    "returnType": null,
                    "body": null,
                    "expression": false,
                    "start": 1821,
                    "end": 1832
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1810,
                  "end": 1832
                }
              ],
              "start": 1805,
              "end": 1834
            },
            "abstract": false,
            "declare": true,
            "start": 1778,
            "end": 1834
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ComponentClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 1850,
              "end": 1864
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
                    "start": 1865,
                    "end": 1866
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 1869,
                    "end": 1871
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1865,
                  "end": 1871
                }
              ],
              "start": 1864,
              "end": 1872
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
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
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1889,
                            "end": 1890
                          },
                          "typeArguments": null,
                          "start": 1889,
                          "end": 1890
                        },
                        "start": 1887,
                        "end": 1890
                      },
                      "start": 1882,
                      "end": 1890
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Component",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1893,
                        "end": 1902
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1903,
                              "end": 1904
                            },
                            "typeArguments": null,
                            "start": 1903,
                            "end": 1904
                          }
                        ],
                        "start": 1902,
                        "end": 1905
                      },
                      "start": 1893,
                      "end": 1905
                    },
                    "start": 1891,
                    "end": 1905
                  },
                  "start": 1877,
                  "end": 1906
                }
              ],
              "start": 1873,
              "end": 1908
            },
            "declare": false,
            "start": 1840,
            "end": 1908
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "CreateElementChildren",
              "optional": false,
              "typeAnnotation": null,
              "start": 1915,
              "end": 1936
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
                    "start": 1937,
                    "end": 1938
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1937,
                  "end": 1938
                }
              ],
              "start": 1936,
              "end": 1939
            },
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1944,
                  "end": 1945
                },
                "typeArguments": null,
                "start": 1944,
                "end": 1945
              },
              "extendsType": {
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
                      "start": 1956,
                      "end": 1964
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSInferType",
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1973,
                            "end": 1974
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1973,
                          "end": 1974
                        },
                        "start": 1967,
                        "end": 1974
                      },
                      "start": 1965,
                      "end": 1974
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1956,
                    "end": 1974
                  }
                ],
                "start": 1954,
                "end": 1976
              },
              "trueType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1981,
                    "end": 1982
                  },
                  "typeArguments": null,
                  "start": 1981,
                  "end": 1982
                },
                "extendsType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 1991,
                    "end": 1994
                  },
                  "start": 1991,
                  "end": 1996
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2003,
                    "end": 2004
                  },
                  "typeArguments": null,
                  "start": 2003,
                  "end": 2004
                },
                "falseType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2011,
                      "end": 2012
                    },
                    "typeArguments": null,
                    "start": 2011,
                    "end": 2012
                  },
                  "start": 2011,
                  "end": 2014
                },
                "start": 1981,
                "end": 2014
              },
              "falseType": {
                "type": "TSUnknownKeyword",
                "start": 2019,
                "end": 2026
              },
              "start": 1944,
              "end": 2026
            },
            "declare": false,
            "start": 1910,
            "end": 2027
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "createElement",
              "optional": false,
              "typeAnnotation": null,
              "start": 2046,
              "end": 2059
            },
            "generator": false,
            "async": false,
            "declare": true,
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
                    "start": 2060,
                    "end": 2061
                  },
                  "constraint": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 2070,
                    "end": 2072
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2060,
                  "end": 2072
                }
              ],
              "start": 2059,
              "end": 2073
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ComponentClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2083,
                      "end": 2097
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2098,
                            "end": 2099
                          },
                          "typeArguments": null,
                          "start": 2098,
                          "end": 2099
                        }
                      ],
                      "start": 2097,
                      "end": 2100
                    },
                    "start": 2083,
                    "end": 2100
                  },
                  "start": 2081,
                  "end": 2100
                },
                "start": 2077,
                "end": 2100
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "children",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2107,
                  "end": 2115
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CreateElementChildren",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2117,
                      "end": 2138
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2139,
                            "end": 2140
                          },
                          "typeArguments": null,
                          "start": 2139,
                          "end": 2140
                        }
                      ],
                      "start": 2138,
                      "end": 2141
                    },
                    "start": 2117,
                    "end": 2141
                  },
                  "start": 2115,
                  "end": 2141
                },
                "value": null,
                "start": 2104,
                "end": 2141
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2145,
                "end": 2148
              },
              "start": 2143,
              "end": 2148
            },
            "body": null,
            "expression": false,
            "start": 2029,
            "end": 2149
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "createElement2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2168,
              "end": 2182
            },
            "generator": false,
            "async": false,
            "declare": true,
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
                    "start": 2183,
                    "end": 2184
                  },
                  "constraint": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 2193,
                    "end": 2195
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2183,
                  "end": 2195
                }
              ],
              "start": 2182,
              "end": 2196
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ComponentClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2206,
                      "end": 2220
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2221,
                            "end": 2222
                          },
                          "typeArguments": null,
                          "start": 2221,
                          "end": 2222
                        }
                      ],
                      "start": 2220,
                      "end": 2223
                    },
                    "start": 2206,
                    "end": 2223
                  },
                  "start": 2204,
                  "end": 2223
                },
                "start": 2200,
                "end": 2223
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "child",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CreateElementChildren",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2234,
                      "end": 2255
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2256,
                            "end": 2257
                          },
                          "typeArguments": null,
                          "start": 2256,
                          "end": 2257
                        }
                      ],
                      "start": 2255,
                      "end": 2258
                    },
                    "start": 2234,
                    "end": 2258
                  },
                  "start": 2232,
                  "end": 2258
                },
                "start": 2227,
                "end": 2258
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2262,
                "end": 2265
              },
              "start": 2260,
              "end": 2265
            },
            "body": null,
            "expression": false,
            "start": 2151,
            "end": 2266
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "InferFunctionTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 2274,
              "end": 2292
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Component",
              "optional": false,
              "typeAnnotation": null,
              "start": 2301,
              "end": 2310
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
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
                        "name": "children",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2312,
                        "end": 2320
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
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 2328,
                                  "end": 2334
                                },
                                "start": 2326,
                                "end": 2334
                              },
                              "start": 2323,
                              "end": 2334
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2339,
                              "end": 2345
                            },
                            "start": 2336,
                            "end": 2345
                          },
                          "start": 2322,
                          "end": 2345
                        },
                        "start": 2320,
                        "end": 2345
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2312,
                      "end": 2345
                    }
                  ],
                  "start": 2311,
                  "end": 2346
                }
              ],
              "start": 2310,
              "end": 2347
            },
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 2348,
              "end": 2350
            },
            "abstract": false,
            "declare": false,
            "start": 2268,
            "end": 2350
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "createElement",
                "optional": false,
                "typeAnnotation": null,
                "start": 2352,
                "end": 2365
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "InferFunctionTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2366,
                  "end": 2384
                },
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2387,
                      "end": 2390
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 2395,
                      "end": 2397
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2400,
                      "end": 2403
                    },
                    "start": 2395,
                    "end": 2403
                  },
                  "id": null,
                  "generator": false,
                  "start": 2386,
                  "end": 2403
                }
              ],
              "optional": false,
              "start": 2352,
              "end": 2404
            },
            "directive": null,
            "start": 2352,
            "end": 2405
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "createElement2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2407,
                "end": 2421
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "InferFunctionTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2422,
                  "end": 2440
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2444,
                          "end": 2447
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 2452,
                          "end": 2454
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2457,
                          "end": 2460
                        },
                        "start": 2452,
                        "end": 2460
                      },
                      "id": null,
                      "generator": false,
                      "start": 2443,
                      "end": 2460
                    }
                  ],
                  "start": 2442,
                  "end": 2461
                }
              ],
              "optional": false,
              "start": 2407,
              "end": 2462
            },
            "directive": null,
            "start": 2407,
            "end": 2463
          }
        ],
        "start": 1775,
        "end": 2466
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1762,
      "end": 2466
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InnerBox",
        "optional": false,
        "typeAnnotation": null,
        "start": 2484,
        "end": 2492
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
              "start": 2493,
              "end": 2494
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2493,
            "end": 2494
          }
        ],
        "start": 2492,
        "end": 2495
      },
      "typeAnnotation": {
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 2502,
              "end": 2507
            },
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
                  "start": 2509,
                  "end": 2510
                },
                "typeArguments": null,
                "start": 2509,
                "end": 2510
              },
              "start": 2507,
              "end": 2510
            },
            "accessibility": null,
            "static": false,
            "start": 2502,
            "end": 2511
          }
        ],
        "start": 2498,
        "end": 2513
      },
      "declare": false,
      "start": 2479,
      "end": 2513
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OuterBox",
        "optional": false,
        "typeAnnotation": null,
        "start": 2520,
        "end": 2528
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
              "start": 2529,
              "end": 2530
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2529,
            "end": 2530
          }
        ],
        "start": 2528,
        "end": 2531
      },
      "typeAnnotation": {
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
              "name": "inner",
              "optional": false,
              "typeAnnotation": null,
              "start": 2538,
              "end": 2543
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "InnerBox",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2545,
                  "end": 2553
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
                        "start": 2554,
                        "end": 2555
                      },
                      "typeArguments": null,
                      "start": 2554,
                      "end": 2555
                    }
                  ],
                  "start": 2553,
                  "end": 2556
                },
                "start": 2545,
                "end": 2556
              },
              "start": 2543,
              "end": 2556
            },
            "accessibility": null,
            "static": false,
            "start": 2538,
            "end": 2556
          }
        ],
        "start": 2534,
        "end": 2558
      },
      "declare": false,
      "start": 2515,
      "end": 2559
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BoxConsumerFromOuterBox",
        "optional": false,
        "typeAnnotation": null,
        "start": 2566,
        "end": 2589
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
              "start": 2590,
              "end": 2591
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2590,
            "end": 2591
          }
        ],
        "start": 2589,
        "end": 2592
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2597,
            "end": 2598
          },
          "typeArguments": null,
          "start": 2597,
          "end": 2598
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OuterBox",
            "optional": false,
            "typeAnnotation": null,
            "start": 2607,
            "end": 2615
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2622,
                    "end": 2623
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2622,
                  "end": 2623
                },
                "start": 2616,
                "end": 2623
              }
            ],
            "start": 2615,
            "end": 2624
          },
          "start": 2607,
          "end": 2624
        },
        "trueType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "box",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InnerBox",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2639,
                    "end": 2647
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2648,
                          "end": 2649
                        },
                        "typeArguments": null,
                        "start": 2648,
                        "end": 2649
                      }
                    ],
                    "start": 2647,
                    "end": 2650
                  },
                  "start": 2639,
                  "end": 2650
                },
                "start": 2637,
                "end": 2650
              },
              "start": 2634,
              "end": 2650
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 2655,
              "end": 2659
            },
            "start": 2652,
            "end": 2659
          },
          "start": 2633,
          "end": 2659
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2668,
          "end": 2673
        },
        "start": 2597,
        "end": 2673
      },
      "declare": false,
      "start": 2561,
      "end": 2674
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "passContentsToFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 2693,
        "end": 2711
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 2712,
              "end": 2713
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2712,
            "end": 2713
          }
        ],
        "start": 2711,
        "end": 2714
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "outerBox",
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
                "start": 2725,
                "end": 2726
              },
              "typeArguments": null,
              "start": 2725,
              "end": 2726
            },
            "start": 2723,
            "end": 2726
          },
          "start": 2715,
          "end": 2726
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "consumer",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BoxConsumerFromOuterBox",
                "optional": false,
                "typeAnnotation": null,
                "start": 2738,
                "end": 2761
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
                      "start": 2762,
                      "end": 2763
                    },
                    "typeArguments": null,
                    "start": 2762,
                    "end": 2763
                  }
                ],
                "start": 2761,
                "end": 2764
              },
              "start": 2738,
              "end": 2764
            },
            "start": 2736,
            "end": 2764
          },
          "start": 2728,
          "end": 2764
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2767,
          "end": 2771
        },
        "start": 2765,
        "end": 2771
      },
      "body": null,
      "expression": false,
      "start": 2676,
      "end": 2772
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
            "name": "outerBoxOfString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OuterBox",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2806,
                  "end": 2814
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 2815,
                      "end": 2821
                    }
                  ],
                  "start": 2814,
                  "end": 2822
                },
                "start": 2806,
                "end": 2822
              },
              "start": 2804,
              "end": 2822
            },
            "start": 2788,
            "end": 2822
          },
          "init": null,
          "definite": false,
          "start": 2788,
          "end": 2822
        }
      ],
      "declare": true,
      "start": 2774,
      "end": 2823
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "passContentsToFunc",
          "optional": false,
          "typeAnnotation": null,
          "start": 2825,
          "end": 2843
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "outerBoxOfString",
            "optional": false,
            "typeAnnotation": null,
            "start": 2844,
            "end": 2860
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "box",
                "optional": false,
                "typeAnnotation": null,
                "start": 2862,
                "end": 2865
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "box",
                "optional": false,
                "typeAnnotation": null,
                "start": 2869,
                "end": 2872
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 2873,
                "end": 2878
              },
              "optional": false,
              "computed": false,
              "start": 2869,
              "end": 2878
            },
            "id": null,
            "generator": false,
            "start": 2862,
            "end": 2878
          }
        ],
        "optional": false,
        "start": 2825,
        "end": 2879
      },
      "directive": null,
      "start": 2825,
      "end": 2880
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DooDad",
        "optional": false,
        "typeAnnotation": null,
        "start": 2909,
        "end": 2915
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "SOMETHING",
              "raw": "'SOMETHING'",
              "start": 2918,
              "end": 2929
            },
            "start": 2918,
            "end": 2929
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "ELSE",
              "raw": "'ELSE'",
              "start": 2932,
              "end": 2938
            },
            "start": 2932,
            "end": 2938
          }
        ],
        "start": 2918,
        "end": 2938
      },
      "declare": false,
      "start": 2904,
      "end": 2940
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Interesting",
        "optional": false,
        "typeAnnotation": null,
        "start": 2948,
        "end": 2959
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
              "name": "compiles",
              "optional": false,
              "typeAnnotation": null,
              "start": 2970,
              "end": 2978
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
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
                    "start": 2986,
                    "end": 2993
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "DooDad",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2994,
                          "end": 3000
                        },
                        "typeArguments": null,
                        "start": 2994,
                        "end": 3000
                      }
                    ],
                    "start": 2993,
                    "end": 3001
                  },
                  "start": 2986,
                  "end": 3001
                },
                "start": 2984,
                "end": 3001
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3016,
                              "end": 3023
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "resolve",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3024,
                              "end": 3031
                            },
                            "optional": false,
                            "computed": false,
                            "start": 3016,
                            "end": 3031
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 3016,
                          "end": 3033
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3034,
                          "end": 3038
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3016,
                        "end": 3038
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "IfStatement",
                                "test": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 3054,
                                    "end": 3055
                                  },
                                  "operator": "<",
                                  "right": {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2",
                                    "start": 3058,
                                    "end": 3059
                                  },
                                  "start": 3054,
                                  "end": 3059
                                },
                                "consequent": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "value": "SOMETHING",
                                        "raw": "'SOMETHING'",
                                        "start": 3074,
                                        "end": 3085
                                      },
                                      "start": 3067,
                                      "end": 3086
                                    }
                                  ],
                                  "start": 3061,
                                  "end": 3091
                                },
                                "alternate": null,
                                "start": 3050,
                                "end": 3091
                              },
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Literal",
                                  "value": "ELSE",
                                  "raw": "'ELSE'",
                                  "start": 3102,
                                  "end": 3108
                                },
                                "start": 3095,
                                "end": 3109
                              }
                            ],
                            "start": 3045,
                            "end": 3113
                          },
                          "id": null,
                          "generator": false,
                          "start": 3039,
                          "end": 3113
                        }
                      ],
                      "optional": false,
                      "start": 3016,
                      "end": 3114
                    },
                    "start": 3009,
                    "end": 3115
                  }
                ],
                "start": 3005,
                "end": 3118
              },
              "id": null,
              "generator": false,
              "start": 2981,
              "end": 3118
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 2963,
            "end": 3119
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "doesnt",
              "optional": false,
              "typeAnnotation": null,
              "start": 3128,
              "end": 3134
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
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
                    "start": 3142,
                    "end": 3149
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "DooDad",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3150,
                          "end": 3156
                        },
                        "typeArguments": null,
                        "start": 3150,
                        "end": 3156
                      }
                    ],
                    "start": 3149,
                    "end": 3157
                  },
                  "start": 3142,
                  "end": 3157
                },
                "start": 3140,
                "end": 3157
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3172,
                              "end": 3179
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "resolve",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3180,
                              "end": 3187
                            },
                            "optional": false,
                            "computed": false,
                            "start": 3172,
                            "end": 3187
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 3172,
                          "end": 3189
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3190,
                          "end": 3194
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3172,
                        "end": 3194
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Literal",
                                  "value": "ELSE",
                                  "raw": "'ELSE'",
                                  "start": 3213,
                                  "end": 3219
                                },
                                "start": 3206,
                                "end": 3220
                              }
                            ],
                            "start": 3201,
                            "end": 3224
                          },
                          "id": null,
                          "generator": false,
                          "start": 3195,
                          "end": 3224
                        }
                      ],
                      "optional": false,
                      "start": 3172,
                      "end": 3225
                    },
                    "start": 3165,
                    "end": 3226
                  }
                ],
                "start": 3161,
                "end": 3229
              },
              "id": null,
              "generator": false,
              "start": 3137,
              "end": 3229
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 3121,
            "end": 3230
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "slightlyDifferentErrorMessage",
              "optional": false,
              "typeAnnotation": null,
              "start": 3239,
              "end": 3268
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
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
                    "start": 3276,
                    "end": 3283
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "DooDad",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3284,
                          "end": 3290
                        },
                        "typeArguments": null,
                        "start": 3284,
                        "end": 3290
                      }
                    ],
                    "start": 3283,
                    "end": 3291
                  },
                  "start": 3276,
                  "end": 3291
                },
                "start": 3274,
                "end": 3291
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3306,
                              "end": 3313
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "resolve",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3314,
                              "end": 3321
                            },
                            "optional": false,
                            "computed": false,
                            "start": 3306,
                            "end": 3321
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 3306,
                          "end": 3323
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3324,
                          "end": 3328
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3306,
                        "end": 3328
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "IfStatement",
                                "test": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 3344,
                                    "end": 3345
                                  },
                                  "operator": "<",
                                  "right": {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2",
                                    "start": 3348,
                                    "end": 3349
                                  },
                                  "start": 3344,
                                  "end": 3349
                                },
                                "consequent": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "value": "SOMETHING",
                                        "raw": "'SOMETHING'",
                                        "start": 3364,
                                        "end": 3375
                                      },
                                      "start": 3357,
                                      "end": 3376
                                    }
                                  ],
                                  "start": 3351,
                                  "end": 3381
                                },
                                "alternate": null,
                                "start": 3340,
                                "end": 3381
                              },
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Literal",
                                  "value": "SOMETHING",
                                  "raw": "'SOMETHING'",
                                  "start": 3392,
                                  "end": 3403
                                },
                                "start": 3385,
                                "end": 3404
                              }
                            ],
                            "start": 3335,
                            "end": 3408
                          },
                          "id": null,
                          "generator": false,
                          "start": 3329,
                          "end": 3408
                        }
                      ],
                      "optional": false,
                      "start": 3306,
                      "end": 3409
                    },
                    "start": 3299,
                    "end": 3410
                  }
                ],
                "start": 3295,
                "end": 3413
              },
              "id": null,
              "generator": false,
              "start": 3271,
              "end": 3413
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 3232,
            "end": 3414
          }
        ],
        "start": 2960,
        "end": 3416
      },
      "abstract": false,
      "declare": false,
      "start": 2942,
      "end": 3416
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "invoke",
        "optional": false,
        "typeAnnotation": null,
        "start": 3457,
        "end": 3463
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 3464,
              "end": 3465
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3464,
            "end": 3465
          }
        ],
        "start": 3463,
        "end": 3466
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
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
                    "start": 3476,
                    "end": 3477
                  },
                  "typeArguments": null,
                  "start": 3476,
                  "end": 3477
                },
                "start": 3473,
                "end": 3477
              },
              "start": 3470,
              "end": 3477
            },
            "start": 3468,
            "end": 3477
          },
          "start": 3467,
          "end": 3477
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
            "start": 3480,
            "end": 3481
          },
          "typeArguments": null,
          "start": 3480,
          "end": 3481
        },
        "start": 3478,
        "end": 3481
      },
      "body": null,
      "expression": false,
      "start": 3440,
      "end": 3482
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
            "name": "xx",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 3492,
                      "end": 3493
                    },
                    "start": 3492,
                    "end": 3493
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3496,
                      "end": 3497
                    },
                    "start": 3496,
                    "end": 3497
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 3500,
                      "end": 3501
                    },
                    "start": 3500,
                    "end": 3501
                  }
                ],
                "start": 3492,
                "end": 3501
              },
              "start": 3490,
              "end": 3501
            },
            "start": 3488,
            "end": 3501
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "invoke",
              "optional": false,
              "typeAnnotation": null,
              "start": 3504,
              "end": 3510
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 3517,
                  "end": 3518
                },
                "id": null,
                "generator": false,
                "start": 3511,
                "end": 3518
              }
            ],
            "optional": false,
            "start": 3504,
            "end": 3519
          },
          "definite": false,
          "start": 3488,
          "end": 3519
        }
      ],
      "declare": false,
      "start": 3484,
      "end": 3520
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assignPartial",
        "optional": false,
        "typeAnnotation": null,
        "start": 3561,
        "end": 3574
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 3575,
              "end": 3576
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3575,
            "end": 3576
          }
        ],
        "start": 3574,
        "end": 3577
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
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
                "start": 3586,
                "end": 3587
              },
              "typeArguments": null,
              "start": 3586,
              "end": 3587
            },
            "start": 3584,
            "end": 3587
          },
          "start": 3578,
          "end": 3587
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "partial",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 3598,
                "end": 3605
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
                      "start": 3606,
                      "end": 3607
                    },
                    "typeArguments": null,
                    "start": 3606,
                    "end": 3607
                  }
                ],
                "start": 3605,
                "end": 3608
              },
              "start": 3598,
              "end": 3608
            },
            "start": 3596,
            "end": 3608
          },
          "start": 3589,
          "end": 3608
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
            "start": 3611,
            "end": 3612
          },
          "typeArguments": null,
          "start": 3611,
          "end": 3612
        },
        "start": 3609,
        "end": 3612
      },
      "body": null,
      "expression": false,
      "start": 3544,
      "end": 3613
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 3619,
            "end": 3622
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3629,
                  "end": 3632
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
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3638,
                          "end": 3644
                        },
                        "start": 3636,
                        "end": 3644
                      },
                      "start": 3633,
                      "end": 3644
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 3646,
                    "end": 3648
                  },
                  "expression": false,
                  "start": 3632,
                  "end": 3648
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3629,
                "end": 3648
              }
            ],
            "start": 3625,
            "end": 3650
          },
          "definite": false,
          "start": 3619,
          "end": 3650
        }
      ],
      "declare": false,
      "start": 3615,
      "end": 3650
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "assignPartial",
          "optional": false,
          "typeAnnotation": null,
          "start": 3652,
          "end": 3665
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 3666,
            "end": 3669
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3673,
                  "end": 3676
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
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3680,
                        "end": 3684
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 3677,
                      "end": 3684
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 3686,
                    "end": 3688
                  },
                  "expression": false,
                  "start": 3676,
                  "end": 3688
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3673,
                "end": 3688
              }
            ],
            "start": 3671,
            "end": 3690
          }
        ],
        "optional": false,
        "start": 3652,
        "end": 3691
      },
      "directive": null,
      "start": 3652,
      "end": 3692
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 10,
  "end": 3719
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 10,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 17,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 30,
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
    "value": "value",
    "start": 38,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 51,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 60,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 66,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 80,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 92,
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
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 102,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 110,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "handlers",
    "start": 114,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 127,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 134,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 142,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 145,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 152,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "handlers",
    "start": 155,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 165,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 171,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "alert",
    "start": 174,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 180,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 201,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "BaseProps",
    "start": 211,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "initialValues",
    "start": 228,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "nextValues",
    "start": 248,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "cur",
    "start": 261,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 269,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 277,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 285,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 291,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 306,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 318,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 329,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 341,
    "end": 348
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 349,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "GenericComponent",
    "start": 355,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 372,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 378,
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
    "value": ",",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "Values",
    "start": 384,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 393,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 399,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 405,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 413,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 423,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "BaseProps",
    "start": 431,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "Values",
    "start": 441,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "iv",
    "start": 454,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "Values",
    "start": 458,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 466,
    "end": 467
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 469,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "GenericComponent",
    "start": 473,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "initialValues",
    "start": 492,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 505,
    "end": 506
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 507,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "nextValues",
    "start": 511,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 523,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 527,
    "end": 529
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 530,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 549,
    "end": 556
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 557,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "useStringOrNumber",
    "start": 566,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 584,
    "end": 585
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 586,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 594,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 603,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 614,
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
    "value": "useIt",
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
    "type": "Identifier",
    "value": "T",
    "start": 624,
    "end": 625
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 626,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 634,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 648,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 656,
    "end": 658
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 659,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 668,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 672,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 680,
    "end": 682
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 683,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 689,
    "end": 690
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 691,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "useStringOrNumber",
    "start": 697,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 714,
    "end": 715
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 715,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 719,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 723,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 743,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "ActionType",
    "start": 748,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 764,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 773,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "attachPayloadTypeHack",
    "start": 775,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 797,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 803,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 812,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "Handler",
    "start": 817,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 831,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 833,
    "end": 834
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 835,
    "end": 842
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 843,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 854,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 855,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 865,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 877,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 887,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 899,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 902,
    "end": 903
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 905,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "ActionHandler",
    "start": 915,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 930,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "actionType",
    "start": 941,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 951,
    "end": 952
  },
  {
    "type": "Identifier",
    "value": "ActionType",
    "start": 953,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 963,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 965,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "handler",
    "start": 971,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 978,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "Handler",
    "start": 980,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 989,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 997,
    "end": 1004
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1005,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "handler",
    "start": 1014,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "actionType",
    "start": 1028,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "ActionType",
    "start": 1040,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "handler",
    "start": 1055,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "Handler",
    "start": 1064,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "ActionHandler",
    "start": 1080,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1101,
    "end": 1108
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1109,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "createReducer",
    "start": 1118,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "defaultState",
    "start": 1144,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1169,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "actionHandlers",
    "start": 1172,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "ActionHandler",
    "start": 1188,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1205,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1219,
    "end": 1222
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1224,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "AppState",
    "start": 1234,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "dummy",
    "start": 1249,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1256,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1266,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "defaultState",
    "start": 1272,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "AppState",
    "start": 1286,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "dummy",
    "start": 1303,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "String",
    "value": "''",
    "start": 1310,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1316,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "NON_VOID_ACTION",
    "start": 1322,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Identifier",
    "value": "ActionType",
    "start": 1339,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1350,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "String",
    "value": "'NON_VOID_ACTION'",
    "start": 1360,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "VOID_ACTION",
    "start": 1384,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Identifier",
    "value": "ActionType",
    "start": 1397,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1408,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "String",
    "value": "'VOID_ACTION'",
    "start": 1416,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "createReducer",
    "start": 1431,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "defaultState",
    "start": 1450,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Identifier",
    "value": "handler",
    "start": 1468,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "NON_VOID_ACTION",
    "start": 1476,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1494,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "_payload",
    "start": 1501,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1511,
    "end": 1513
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1514,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Identifier",
    "value": "handler",
    "start": 1526,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Identifier",
    "value": "VOID_ACTION",
    "start": 1534,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1547,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1553,
    "end": 1555
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1556,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1577,
    "end": 1581
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1597,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1605,
    "end": 1607
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1608,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1623,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1631,
    "end": 1633
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1634,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1644,
    "end": 1648
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "on",
    "start": 1657,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1662,
    "end": 1669
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1670,
    "end": 1675
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 1685,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1702,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1712,
    "end": 1719
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1720,
    "end": 1723
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Identifier",
    "value": "on",
    "start": 1732,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1735,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1742,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1762,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "N1",
    "start": 1772,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1778,
    "end": 1785
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1786,
    "end": 1791
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 1792,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1810,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 1822,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1840,
    "end": 1849
  },
  {
    "type": "Identifier",
    "value": "ComponentClass",
    "start": 1850,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1877,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 1882,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 1893,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1910,
    "end": 1914
  },
  {
    "type": "Identifier",
    "value": "CreateElementChildren",
    "start": 1915,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1946,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 1956,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1967,
    "end": 1972
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1983,
    "end": 1990
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1991,
    "end": 1994
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2019,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2029,
    "end": 2036
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2037,
    "end": 2045
  },
  {
    "type": "Identifier",
    "value": "createElement",
    "start": 2046,
    "end": 2059
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2062,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2077,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Identifier",
    "value": "ComponentClass",
    "start": 2083,
    "end": 2097
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2104,
    "end": 2107
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 2107,
    "end": 2115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Identifier",
    "value": "CreateElementChildren",
    "start": 2117,
    "end": 2138
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2145,
    "end": 2148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2151,
    "end": 2158
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2159,
    "end": 2167
  },
  {
    "type": "Identifier",
    "value": "createElement2",
    "start": 2168,
    "end": 2182
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2182,
    "end": 2183
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2183,
    "end": 2184
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2185,
    "end": 2192
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2200,
    "end": 2204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Identifier",
    "value": "ComponentClass",
    "start": 2206,
    "end": 2220
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2220,
    "end": 2221
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2221,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Identifier",
    "value": "child",
    "start": 2227,
    "end": 2232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2232,
    "end": 2233
  },
  {
    "type": "Identifier",
    "value": "CreateElementChildren",
    "start": 2234,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2256,
    "end": 2257
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2257,
    "end": 2258
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2259,
    "end": 2260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2262,
    "end": 2265
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2268,
    "end": 2273
  },
  {
    "type": "Identifier",
    "value": "InferFunctionTypes",
    "start": 2274,
    "end": 2292
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2293,
    "end": 2300
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 2301,
    "end": 2310
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 2312,
    "end": 2320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2323,
    "end": 2326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2326,
    "end": 2327
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2328,
    "end": 2334
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2336,
    "end": 2338
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2339,
    "end": 2345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2346,
    "end": 2347
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Identifier",
    "value": "createElement",
    "start": 2352,
    "end": 2365
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Identifier",
    "value": "InferFunctionTypes",
    "start": 2366,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2386,
    "end": 2387
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2387,
    "end": 2390
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2390,
    "end": 2391
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2392,
    "end": 2394
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 2395,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2398,
    "end": 2399
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2400,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "Identifier",
    "value": "createElement2",
    "start": 2407,
    "end": 2421
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Identifier",
    "value": "InferFunctionTypes",
    "start": 2422,
    "end": 2440
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2444,
    "end": 2447
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2449,
    "end": 2451
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 2452,
    "end": 2454
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2455,
    "end": 2456
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2457,
    "end": 2460
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2461,
    "end": 2462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2462,
    "end": 2463
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2465,
    "end": 2466
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2479,
    "end": 2483
  },
  {
    "type": "Identifier",
    "value": "InnerBox",
    "start": 2484,
    "end": 2492
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2492,
    "end": 2493
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2493,
    "end": 2494
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2494,
    "end": 2495
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2502,
    "end": 2507
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2507,
    "end": 2508
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2509,
    "end": 2510
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2510,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2515,
    "end": 2519
  },
  {
    "type": "Identifier",
    "value": "OuterBox",
    "start": 2520,
    "end": 2528
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2528,
    "end": 2529
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2529,
    "end": 2530
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2530,
    "end": 2531
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2532,
    "end": 2533
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2534,
    "end": 2535
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 2538,
    "end": 2543
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2543,
    "end": 2544
  },
  {
    "type": "Identifier",
    "value": "InnerBox",
    "start": 2545,
    "end": 2553
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2553,
    "end": 2554
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2554,
    "end": 2555
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2555,
    "end": 2556
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2558,
    "end": 2559
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2561,
    "end": 2565
  },
  {
    "type": "Identifier",
    "value": "BoxConsumerFromOuterBox",
    "start": 2566,
    "end": 2589
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2589,
    "end": 2590
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2590,
    "end": 2591
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2591,
    "end": 2592
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2593,
    "end": 2594
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2597,
    "end": 2598
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2599,
    "end": 2606
  },
  {
    "type": "Identifier",
    "value": "OuterBox",
    "start": 2607,
    "end": 2615
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2615,
    "end": 2616
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2616,
    "end": 2621
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2622,
    "end": 2623
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2623,
    "end": 2624
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2625,
    "end": 2626
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2633,
    "end": 2634
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 2634,
    "end": 2637
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2637,
    "end": 2638
  },
  {
    "type": "Identifier",
    "value": "InnerBox",
    "start": 2639,
    "end": 2647
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2647,
    "end": 2648
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2648,
    "end": 2649
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2649,
    "end": 2650
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2650,
    "end": 2651
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2652,
    "end": 2654
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2655,
    "end": 2659
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2668,
    "end": 2673
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2673,
    "end": 2674
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2676,
    "end": 2683
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2684,
    "end": 2692
  },
  {
    "type": "Identifier",
    "value": "passContentsToFunc",
    "start": 2693,
    "end": 2711
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2711,
    "end": 2712
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2712,
    "end": 2713
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2713,
    "end": 2714
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2714,
    "end": 2715
  },
  {
    "type": "Identifier",
    "value": "outerBox",
    "start": 2715,
    "end": 2723
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2723,
    "end": 2724
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2725,
    "end": 2726
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2726,
    "end": 2727
  },
  {
    "type": "Identifier",
    "value": "consumer",
    "start": 2728,
    "end": 2736
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2736,
    "end": 2737
  },
  {
    "type": "Identifier",
    "value": "BoxConsumerFromOuterBox",
    "start": 2738,
    "end": 2761
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2761,
    "end": 2762
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2762,
    "end": 2763
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2763,
    "end": 2764
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2764,
    "end": 2765
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2765,
    "end": 2766
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2767,
    "end": 2771
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2771,
    "end": 2772
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2774,
    "end": 2781
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2782,
    "end": 2787
  },
  {
    "type": "Identifier",
    "value": "outerBoxOfString",
    "start": 2788,
    "end": 2804
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2804,
    "end": 2805
  },
  {
    "type": "Identifier",
    "value": "OuterBox",
    "start": 2806,
    "end": 2814
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2814,
    "end": 2815
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2815,
    "end": 2821
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2821,
    "end": 2822
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2822,
    "end": 2823
  },
  {
    "type": "Identifier",
    "value": "passContentsToFunc",
    "start": 2825,
    "end": 2843
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2843,
    "end": 2844
  },
  {
    "type": "Identifier",
    "value": "outerBoxOfString",
    "start": 2844,
    "end": 2860
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2860,
    "end": 2861
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 2862,
    "end": 2865
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2866,
    "end": 2868
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 2869,
    "end": 2872
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2872,
    "end": 2873
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2873,
    "end": 2878
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2878,
    "end": 2879
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2879,
    "end": 2880
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2904,
    "end": 2908
  },
  {
    "type": "Identifier",
    "value": "DooDad",
    "start": 2909,
    "end": 2915
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2916,
    "end": 2917
  },
  {
    "type": "String",
    "value": "'SOMETHING'",
    "start": 2918,
    "end": 2929
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2930,
    "end": 2931
  },
  {
    "type": "String",
    "value": "'ELSE'",
    "start": 2932,
    "end": 2938
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2939,
    "end": 2940
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2942,
    "end": 2947
  },
  {
    "type": "Identifier",
    "value": "Interesting",
    "start": 2948,
    "end": 2959
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2960,
    "end": 2961
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2963,
    "end": 2969
  },
  {
    "type": "Identifier",
    "value": "compiles",
    "start": 2970,
    "end": 2978
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2979,
    "end": 2980
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2981,
    "end": 2982
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2982,
    "end": 2983
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2984,
    "end": 2985
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2986,
    "end": 2993
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2993,
    "end": 2994
  },
  {
    "type": "Identifier",
    "value": "DooDad",
    "start": 2994,
    "end": 3000
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3000,
    "end": 3001
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3002,
    "end": 3004
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3005,
    "end": 3006
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3009,
    "end": 3015
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3016,
    "end": 3023
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3023,
    "end": 3024
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 3024,
    "end": 3031
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3031,
    "end": 3032
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3032,
    "end": 3033
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3033,
    "end": 3034
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3034,
    "end": 3038
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3038,
    "end": 3039
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3039,
    "end": 3040
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3040,
    "end": 3041
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3042,
    "end": 3044
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3045,
    "end": 3046
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3050,
    "end": 3052
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3053,
    "end": 3054
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3054,
    "end": 3055
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3056,
    "end": 3057
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3058,
    "end": 3059
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3059,
    "end": 3060
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3061,
    "end": 3062
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3067,
    "end": 3073
  },
  {
    "type": "String",
    "value": "'SOMETHING'",
    "start": 3074,
    "end": 3085
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3085,
    "end": 3086
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3090,
    "end": 3091
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3095,
    "end": 3101
  },
  {
    "type": "String",
    "value": "'ELSE'",
    "start": 3102,
    "end": 3108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3108,
    "end": 3109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3112,
    "end": 3113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3113,
    "end": 3114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3114,
    "end": 3115
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3117,
    "end": 3118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3118,
    "end": 3119
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3121,
    "end": 3127
  },
  {
    "type": "Identifier",
    "value": "doesnt",
    "start": 3128,
    "end": 3134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3135,
    "end": 3136
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3137,
    "end": 3138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3138,
    "end": 3139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3140,
    "end": 3141
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3142,
    "end": 3149
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3149,
    "end": 3150
  },
  {
    "type": "Identifier",
    "value": "DooDad",
    "start": 3150,
    "end": 3156
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3156,
    "end": 3157
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3158,
    "end": 3160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3161,
    "end": 3162
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3165,
    "end": 3171
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3172,
    "end": 3179
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3179,
    "end": 3180
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 3180,
    "end": 3187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3187,
    "end": 3188
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3188,
    "end": 3189
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3189,
    "end": 3190
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3190,
    "end": 3194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3194,
    "end": 3195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3195,
    "end": 3196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3196,
    "end": 3197
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3198,
    "end": 3200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3201,
    "end": 3202
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3206,
    "end": 3212
  },
  {
    "type": "String",
    "value": "'ELSE'",
    "start": 3213,
    "end": 3219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3219,
    "end": 3220
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3223,
    "end": 3224
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3224,
    "end": 3225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3225,
    "end": 3226
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3228,
    "end": 3229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3229,
    "end": 3230
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3232,
    "end": 3238
  },
  {
    "type": "Identifier",
    "value": "slightlyDifferentErrorMessage",
    "start": 3239,
    "end": 3268
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3269,
    "end": 3270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3271,
    "end": 3272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3272,
    "end": 3273
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3274,
    "end": 3275
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3276,
    "end": 3283
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3283,
    "end": 3284
  },
  {
    "type": "Identifier",
    "value": "DooDad",
    "start": 3284,
    "end": 3290
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3290,
    "end": 3291
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3292,
    "end": 3294
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3295,
    "end": 3296
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3299,
    "end": 3305
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3306,
    "end": 3313
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3313,
    "end": 3314
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 3314,
    "end": 3321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3321,
    "end": 3322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3322,
    "end": 3323
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3323,
    "end": 3324
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3324,
    "end": 3328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3328,
    "end": 3329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3329,
    "end": 3330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3330,
    "end": 3331
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3332,
    "end": 3334
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3335,
    "end": 3336
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3340,
    "end": 3342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3343,
    "end": 3344
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3344,
    "end": 3345
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3346,
    "end": 3347
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3348,
    "end": 3349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3349,
    "end": 3350
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3351,
    "end": 3352
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3357,
    "end": 3363
  },
  {
    "type": "String",
    "value": "'SOMETHING'",
    "start": 3364,
    "end": 3375
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3375,
    "end": 3376
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3380,
    "end": 3381
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3385,
    "end": 3391
  },
  {
    "type": "String",
    "value": "'SOMETHING'",
    "start": 3392,
    "end": 3403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3403,
    "end": 3404
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3407,
    "end": 3408
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3408,
    "end": 3409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3409,
    "end": 3410
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3412,
    "end": 3413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3413,
    "end": 3414
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3415,
    "end": 3416
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3440,
    "end": 3447
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3448,
    "end": 3456
  },
  {
    "type": "Identifier",
    "value": "invoke",
    "start": 3457,
    "end": 3463
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3463,
    "end": 3464
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3464,
    "end": 3465
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3465,
    "end": 3466
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3466,
    "end": 3467
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3467,
    "end": 3468
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3468,
    "end": 3469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3470,
    "end": 3471
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3471,
    "end": 3472
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3473,
    "end": 3475
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3476,
    "end": 3477
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3477,
    "end": 3478
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3478,
    "end": 3479
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3480,
    "end": 3481
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3481,
    "end": 3482
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3484,
    "end": 3487
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 3488,
    "end": 3490
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3490,
    "end": 3491
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3492,
    "end": 3493
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3494,
    "end": 3495
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3496,
    "end": 3497
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3498,
    "end": 3499
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3500,
    "end": 3501
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3502,
    "end": 3503
  },
  {
    "type": "Identifier",
    "value": "invoke",
    "start": 3504,
    "end": 3510
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3510,
    "end": 3511
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3511,
    "end": 3512
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3512,
    "end": 3513
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3514,
    "end": 3516
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3517,
    "end": 3518
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3518,
    "end": 3519
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3519,
    "end": 3520
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3544,
    "end": 3551
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3552,
    "end": 3560
  },
  {
    "type": "Identifier",
    "value": "assignPartial",
    "start": 3561,
    "end": 3574
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3574,
    "end": 3575
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3575,
    "end": 3576
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3576,
    "end": 3577
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3577,
    "end": 3578
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 3578,
    "end": 3584
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3584,
    "end": 3585
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3586,
    "end": 3587
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3587,
    "end": 3588
  },
  {
    "type": "Identifier",
    "value": "partial",
    "start": 3589,
    "end": 3596
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3596,
    "end": 3597
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 3598,
    "end": 3605
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3605,
    "end": 3606
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3606,
    "end": 3607
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3607,
    "end": 3608
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3608,
    "end": 3609
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3609,
    "end": 3610
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3611,
    "end": 3612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3612,
    "end": 3613
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3615,
    "end": 3618
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3619,
    "end": 3622
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3623,
    "end": 3624
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3625,
    "end": 3626
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3629,
    "end": 3632
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3632,
    "end": 3633
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3633,
    "end": 3636
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3636,
    "end": 3637
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3638,
    "end": 3644
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3644,
    "end": 3645
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3646,
    "end": 3647
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3647,
    "end": 3648
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3649,
    "end": 3650
  },
  {
    "type": "Identifier",
    "value": "assignPartial",
    "start": 3652,
    "end": 3665
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3665,
    "end": 3666
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3666,
    "end": 3669
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3669,
    "end": 3670
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3671,
    "end": 3672
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3673,
    "end": 3676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3676,
    "end": 3677
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3677,
    "end": 3680
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 3680,
    "end": 3684
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3684,
    "end": 3685
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3686,
    "end": 3687
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3687,
    "end": 3688
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3689,
    "end": 3690
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3690,
    "end": 3691
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3691,
    "end": 3692
  }
]
```
