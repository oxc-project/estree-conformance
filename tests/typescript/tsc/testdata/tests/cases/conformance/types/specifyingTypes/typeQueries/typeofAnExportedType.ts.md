__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
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
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 15,
              "end": 16
            },
            "definite": false,
            "start": 11,
            "end": 16
          }
        ],
        "declare": false,
        "start": 7,
        "end": 17
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 17
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "r1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 40,
                    "end": 41
                  },
                  "typeArguments": null,
                  "start": 33,
                  "end": 41
                },
                "start": 31,
                "end": 41
              },
              "start": 29,
              "end": 41
            },
            "init": null,
            "definite": false,
            "start": 29,
            "end": 41
          }
        ],
        "declare": false,
        "start": 25,
        "end": 42
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 18,
      "end": 42
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 55
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
                    "start": 60,
                    "end": 63
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 65,
                    "end": 67
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 60,
                  "end": 67
                }
              ],
              "start": 58,
              "end": 69
            },
            "definite": false,
            "start": 54,
            "end": 69
          }
        ],
        "declare": false,
        "start": 50,
        "end": 70
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 43,
      "end": 70
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "r2",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 93,
                    "end": 94
                  },
                  "typeArguments": null,
                  "start": 86,
                  "end": 94
                },
                "start": 84,
                "end": 94
              },
              "start": 82,
              "end": 94
            },
            "init": null,
            "definite": false,
            "start": 82,
            "end": 94
          }
        ],
        "declare": false,
        "start": 78,
        "end": 95
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 71,
      "end": 95
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 109,
          "end": 110
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
                "start": 117,
                "end": 120
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 122,
                  "end": 128
                },
                "start": 120,
                "end": 128
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
              "start": 117,
              "end": 129
            }
          ],
          "start": 111,
          "end": 131
        },
        "abstract": false,
        "declare": false,
        "start": 103,
        "end": 131
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 96,
      "end": 131
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 146,
                    "end": 147
                  },
                  "typeArguments": null,
                  "start": 146,
                  "end": 147
                },
                "start": 144,
                "end": 147
              },
              "start": 143,
              "end": 147
            },
            "init": null,
            "definite": false,
            "start": 143,
            "end": 147
          }
        ],
        "declare": false,
        "start": 139,
        "end": 148
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 132,
      "end": 148
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 157,
                  "end": 158
                },
                "typeArguments": null,
                "start": 157,
                "end": 158
              },
              "start": 155,
              "end": 158
            },
            "start": 153,
            "end": 158
          },
          "init": null,
          "definite": false,
          "start": 153,
          "end": 158
        }
      ],
      "declare": false,
      "start": 149,
      "end": 159
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "r3",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 183,
                    "end": 184
                  },
                  "typeArguments": null,
                  "start": 176,
                  "end": 184
                },
                "start": 174,
                "end": 184
              },
              "start": 172,
              "end": 184
            },
            "init": null,
            "definite": false,
            "start": 172,
            "end": 184
          }
        ],
        "declare": false,
        "start": 168,
        "end": 185
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 161,
      "end": 185
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "r4",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 208,
                    "end": 209
                  },
                  "typeArguments": null,
                  "start": 201,
                  "end": 209
                },
                "start": 199,
                "end": 209
              },
              "start": 197,
              "end": 209
            },
            "init": null,
            "definite": false,
            "start": 197,
            "end": 209
          }
        ],
        "declare": false,
        "start": 193,
        "end": 210
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 186,
      "end": 210
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "r4b",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 234,
                    "end": 236
                  },
                  "typeArguments": null,
                  "start": 227,
                  "end": 236
                },
                "start": 225,
                "end": 236
              },
              "start": 222,
              "end": 236
            },
            "init": null,
            "definite": false,
            "start": 222,
            "end": 236
          }
        ],
        "declare": false,
        "start": 218,
        "end": 237
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 211,
      "end": 237
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null,
          "start": 256,
          "end": 257
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 264,
                "end": 267
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 269,
                  "end": 275
                },
                "start": 267,
                "end": 275
              },
              "accessibility": null,
              "static": false,
              "start": 264,
              "end": 276
            }
          ],
          "start": 258,
          "end": 278
        },
        "declare": false,
        "start": 246,
        "end": 278
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 239,
      "end": 278
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
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
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 293,
                    "end": 294
                  },
                  "typeArguments": null,
                  "start": 293,
                  "end": 294
                },
                "start": 291,
                "end": 294
              },
              "start": 290,
              "end": 294
            },
            "init": null,
            "definite": false,
            "start": 290,
            "end": 294
          }
        ],
        "declare": false,
        "start": 286,
        "end": 295
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 279,
      "end": 295
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
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 304,
                  "end": 305
                },
                "typeArguments": null,
                "start": 304,
                "end": 305
              },
              "start": 302,
              "end": 305
            },
            "start": 300,
            "end": 305
          },
          "init": null,
          "definite": false,
          "start": 300,
          "end": 305
        }
      ],
      "declare": false,
      "start": 296,
      "end": 306
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "r5",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 329,
                    "end": 330
                  },
                  "typeArguments": null,
                  "start": 322,
                  "end": 330
                },
                "start": 320,
                "end": 330
              },
              "start": 318,
              "end": 330
            },
            "init": null,
            "definite": false,
            "start": 318,
            "end": 330
          }
        ],
        "declare": false,
        "start": 314,
        "end": 331
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 307,
      "end": 331
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "r5",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 354,
                    "end": 356
                  },
                  "typeArguments": null,
                  "start": 347,
                  "end": 356
                },
                "start": 345,
                "end": 356
              },
              "start": 343,
              "end": 356
            },
            "init": null,
            "definite": false,
            "start": 343,
            "end": 356
          }
        ],
        "declare": false,
        "start": 339,
        "end": 357
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 332,
      "end": 357
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 376,
          "end": 377
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 395,
                      "end": 398
                    },
                    "init": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 401,
                      "end": 403
                    },
                    "definite": false,
                    "start": 395,
                    "end": 403
                  }
                ],
                "declare": false,
                "start": 391,
                "end": 404
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 384,
              "end": 404
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 422,
                  "end": 423
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
                        "start": 434,
                        "end": 437
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 439,
                          "end": 445
                        },
                        "start": 437,
                        "end": 445
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
                      "start": 434,
                      "end": 446
                    }
                  ],
                  "start": 424,
                  "end": 452
                },
                "abstract": false,
                "declare": false,
                "start": 416,
                "end": 452
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 409,
              "end": 452
            }
          ],
          "start": 378,
          "end": 454
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 366,
        "end": 454
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 359,
      "end": 454
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "r6",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 477,
                    "end": 478
                  },
                  "typeArguments": null,
                  "start": 470,
                  "end": 478
                },
                "start": 468,
                "end": 478
              },
              "start": 466,
              "end": 478
            },
            "init": null,
            "definite": false,
            "start": 466,
            "end": 478
          }
        ],
        "declare": false,
        "start": 462,
        "end": 479
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 455,
      "end": 479
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "r7",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 502,
                      "end": 503
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 504,
                      "end": 507
                    },
                    "start": 502,
                    "end": 507
                  },
                  "typeArguments": null,
                  "start": 495,
                  "end": 507
                },
                "start": 493,
                "end": 507
              },
              "start": 491,
              "end": 507
            },
            "init": null,
            "definite": false,
            "start": 491,
            "end": 507
          }
        ],
        "declare": false,
        "start": 487,
        "end": 508
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 480,
      "end": 508
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Z",
          "optional": false,
          "typeAnnotation": null,
          "start": 524,
          "end": 525
        },
        "moduleReference": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 528,
          "end": 529
        },
        "importKind": "value",
        "start": 517,
        "end": 530
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 510,
      "end": 530
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "r8",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 553,
                    "end": 554
                  },
                  "typeArguments": null,
                  "start": 546,
                  "end": 554
                },
                "start": 544,
                "end": 554
              },
              "start": 542,
              "end": 554
            },
            "init": null,
            "definite": false,
            "start": 542,
            "end": 554
          }
        ],
        "declare": false,
        "start": 538,
        "end": 555
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 531,
      "end": 555
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "r9",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 578,
                      "end": 579
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 580,
                      "end": 583
                    },
                    "start": 578,
                    "end": 583
                  },
                  "typeArguments": null,
                  "start": 571,
                  "end": 583
                },
                "start": 569,
                "end": 583
              },
              "start": 567,
              "end": 583
            },
            "init": null,
            "definite": false,
            "start": 567,
            "end": 583
          }
        ],
        "declare": false,
        "start": 563,
        "end": 584
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 556,
      "end": 584
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null,
          "start": 598,
          "end": 599
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 606,
                "end": 607
              },
              "initializer": null,
              "computed": false,
              "start": 606,
              "end": 607
            }
          ],
          "start": 600,
          "end": 609
        },
        "const": false,
        "declare": false,
        "start": 593,
        "end": 609
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 586,
      "end": 609
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "r10",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 633,
                    "end": 634
                  },
                  "typeArguments": null,
                  "start": 626,
                  "end": 634
                },
                "start": 624,
                "end": 634
              },
              "start": 621,
              "end": 634
            },
            "init": null,
            "definite": false,
            "start": 621,
            "end": 634
          }
        ],
        "declare": false,
        "start": 617,
        "end": 635
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 610,
      "end": 635
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "r11",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 659,
                      "end": 660
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 661,
                      "end": 662
                    },
                    "start": 659,
                    "end": 662
                  },
                  "typeArguments": null,
                  "start": 652,
                  "end": 662
                },
                "start": 650,
                "end": 662
              },
              "start": 647,
              "end": 662
            },
            "init": null,
            "definite": false,
            "start": 647,
            "end": 662
          }
        ],
        "declare": false,
        "start": 643,
        "end": 663
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 636,
      "end": 663
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "r12",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r12",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 688,
                    "end": 691
                  },
                  "typeArguments": null,
                  "start": 681,
                  "end": 691
                },
                "start": 679,
                "end": 691
              },
              "start": 676,
              "end": 691
            },
            "init": null,
            "definite": false,
            "start": 676,
            "end": 691
          }
        ],
        "declare": false,
        "start": 672,
        "end": 692
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 665,
      "end": 692
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 710,
          "end": 713
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
          "start": 716,
          "end": 719
        },
        "expression": false,
        "start": 701,
        "end": 719
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 694,
      "end": 719
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 737,
          "end": 740
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 758,
                      "end": 759
                    },
                    "init": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 762,
                      "end": 763
                    },
                    "definite": false,
                    "start": 758,
                    "end": 763
                  }
                ],
                "declare": false,
                "start": 754,
                "end": 764
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 747,
              "end": 764
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 782,
                  "end": 783
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
                        "start": 794,
                        "end": 797
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 799,
                          "end": 805
                        },
                        "start": 797,
                        "end": 805
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
                      "start": 794,
                      "end": 806
                    }
                  ],
                  "start": 784,
                  "end": 812
                },
                "abstract": false,
                "declare": false,
                "start": 776,
                "end": 812
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 769,
              "end": 812
            }
          ],
          "start": 741,
          "end": 814
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 727,
        "end": 814
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 720,
      "end": 814
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "r13",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 838,
                    "end": 841
                  },
                  "typeArguments": null,
                  "start": 831,
                  "end": 841
                },
                "start": 829,
                "end": 841
              },
              "start": 826,
              "end": 841
            },
            "init": null,
            "definite": false,
            "start": 826,
            "end": 841
          }
        ],
        "declare": false,
        "start": 822,
        "end": 842
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 815,
      "end": 842
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 842
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 16,
    "end": 17
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 18,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 25,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 29,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 33,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 43,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 50,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 60,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 63,
    "end": 64
  },
  {
    "type": "String",
    "value": "''",
    "start": 65,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 71,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 78,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 82,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 86,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 96,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 103,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 117,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 122,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 132,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 139,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 149,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 153,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 161,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 168,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 172,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 174,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 176,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 186,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 193,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 197,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 199,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 201,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 211,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 218,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "r4b",
    "start": 222,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 227,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 234,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 239,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 246,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 264,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 269,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 279,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 286,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 294,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 296,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 300,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "I",
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
    "type": "Keyword",
    "value": "export",
    "start": 307,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 314,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 318,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 320,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 322,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 330,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 332,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 339,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 343,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 345,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 347,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 354,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 359,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 366,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 378,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 384,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 391,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 395,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 399,
    "end": 400
  },
  {
    "type": "String",
    "value": "''",
    "start": 401,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 403,
    "end": 404
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 409,
    "end": 415
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 416,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 434,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 439,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 453,
    "end": 454
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 455,
    "end": 461
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 462,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 466,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 468,
    "end": 469
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 470,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 478,
    "end": 479
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 480,
    "end": 486
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 487,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 491,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 493,
    "end": 494
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 495,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 504,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 507,
    "end": 508
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 510,
    "end": 516
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 517,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 529,
    "end": 530
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 531,
    "end": 537
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 538,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 542,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 544,
    "end": 545
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 546,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 554,
    "end": 555
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 556,
    "end": 562
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 563,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 567,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 569,
    "end": 570
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 571,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 580,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 583,
    "end": 584
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 586,
    "end": 592
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 593,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 608,
    "end": 609
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 610,
    "end": 616
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 617,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 621,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 624,
    "end": 625
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 626,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 634,
    "end": 635
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 636,
    "end": 642
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 643,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "r11",
    "start": 647,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 650,
    "end": 651
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 652,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 662,
    "end": 663
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 665,
    "end": 671
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 672,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "r12",
    "start": 676,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 679,
    "end": 680
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 681,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "r12",
    "start": 688,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 691,
    "end": 692
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 694,
    "end": 700
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 701,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 710,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 718,
    "end": 719
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 720,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 727,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 737,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 741,
    "end": 742
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 747,
    "end": 753
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 754,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 760,
    "end": 761
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 763,
    "end": 764
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 769,
    "end": 775
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 776,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 794,
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
    "value": "string",
    "start": 799,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 813,
    "end": 814
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 815,
    "end": 821
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 822,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "r13",
    "start": 826,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 829,
    "end": 830
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 831,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 838,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 841,
    "end": 842
  }
]
```
