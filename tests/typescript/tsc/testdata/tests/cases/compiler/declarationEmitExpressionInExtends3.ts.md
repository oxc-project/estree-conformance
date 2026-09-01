__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExportedClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 26
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
                "start": 27,
                "end": 28
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 27,
              "end": 28
            }
          ],
          "start": 26,
          "end": 29
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 33,
                "end": 34
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
                    "start": 36,
                    "end": 37
                  },
                  "typeArguments": null,
                  "start": 36,
                  "end": 37
                },
                "start": 34,
                "end": 37
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
              "start": 33,
              "end": 38
            }
          ],
          "start": 30,
          "end": 40
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 40
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 40
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LocalClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 58
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
              "start": 59,
              "end": 60
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 59,
            "end": 60
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 63
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 62,
            "end": 63
          }
        ],
        "start": 58,
        "end": 64
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 72
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
                  "start": 74,
                  "end": 75
                },
                "typeArguments": null,
                "start": 74,
                "end": 75
              },
              "start": 72,
              "end": 75
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
            "start": 71,
            "end": 76
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 82
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 84,
                  "end": 85
                },
                "typeArguments": null,
                "start": 84,
                "end": 85
              },
              "start": 82,
              "end": 85
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
            "start": 81,
            "end": 86
          }
        ],
        "start": 65,
        "end": 88
      },
      "abstract": false,
      "declare": false,
      "start": 42,
      "end": 88
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExportedInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 107,
          "end": 124
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 132
              },
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
              "accessibility": null,
              "static": false,
              "start": 131,
              "end": 141
            }
          ],
          "start": 125,
          "end": 143
        },
        "declare": false,
        "start": 97,
        "end": 143
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 90,
      "end": 143
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LocalInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 155,
        "end": 169
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
              "end": 177
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 179,
                "end": 185
              },
              "start": 177,
              "end": 185
            },
            "accessibility": null,
            "static": false,
            "start": 176,
            "end": 186
          }
        ],
        "start": 170,
        "end": 188
      },
      "declare": false,
      "start": 145,
      "end": 188
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getLocalClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 199,
        "end": 212
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
              "start": 213,
              "end": 214
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 213,
            "end": 214
          }
        ],
        "start": 212,
        "end": 215
      },
      "params": [
        {
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 219,
                "end": 220
              },
              "typeArguments": null,
              "start": 219,
              "end": 220
            },
            "start": 217,
            "end": 220
          },
          "start": 216,
          "end": 220
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "LocalClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 235,
              "end": 245
            },
            "start": 228,
            "end": 246
          }
        ],
        "start": 222,
        "end": 248
      },
      "expression": false,
      "start": 190,
      "end": 248
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getExportedClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 259,
        "end": 275
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
              "start": 276,
              "end": 277
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 276,
            "end": 277
          }
        ],
        "start": 275,
        "end": 278
      },
      "params": [
        {
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 282,
                "end": 283
              },
              "typeArguments": null,
              "start": 282,
              "end": 283
            },
            "start": 280,
            "end": 283
          },
          "start": 279,
          "end": 283
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ExportedClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 298,
              "end": 311
            },
            "start": 291,
            "end": 312
          }
        ],
        "start": 285,
        "end": 314
      },
      "expression": false,
      "start": 250,
      "end": 314
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 331,
          "end": 338
        },
        "typeParameters": null,
        "superClass": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getLocalClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 347,
            "end": 360
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LocalInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 361,
                  "end": 375
                },
                "typeArguments": null,
                "start": 361,
                "end": 375
              }
            ],
            "start": 360,
            "end": 376
          },
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 377,
              "end": 386
            }
          ],
          "optional": false,
          "start": 347,
          "end": 387
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 388,
              "end": 394
            },
            {
              "type": "TSNumberKeyword",
              "start": 396,
              "end": 402
            }
          ],
          "start": 387,
          "end": 403
        },
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 404,
          "end": 442
        },
        "abstract": false,
        "declare": false,
        "start": 325,
        "end": 442
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 318,
      "end": 442
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyClass2",
          "optional": false,
          "typeAnnotation": null,
          "start": 458,
          "end": 466
        },
        "typeParameters": null,
        "superClass": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getExportedClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 475,
            "end": 491
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LocalInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 492,
                  "end": 506
                },
                "typeArguments": null,
                "start": 492,
                "end": 506
              }
            ],
            "start": 491,
            "end": 507
          },
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 508,
              "end": 517
            }
          ],
          "optional": false,
          "start": 475,
          "end": 518
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 519,
              "end": 525
            }
          ],
          "start": 518,
          "end": 526
        },
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 527,
          "end": 536
        },
        "abstract": false,
        "declare": false,
        "start": 452,
        "end": 536
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 445,
      "end": 536
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyClass3",
          "optional": false,
          "typeAnnotation": null,
          "start": 552,
          "end": 560
        },
        "typeParameters": null,
        "superClass": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getExportedClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 569,
            "end": 585
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LocalInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 586,
                  "end": 600
                },
                "typeArguments": null,
                "start": 586,
                "end": 600
              }
            ],
            "start": 585,
            "end": 601
          },
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 602,
              "end": 611
            }
          ],
          "optional": false,
          "start": 569,
          "end": 612
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "LocalInterface",
                "optional": false,
                "typeAnnotation": null,
                "start": 613,
                "end": 627
              },
              "typeArguments": null,
              "start": 613,
              "end": 627
            }
          ],
          "start": 612,
          "end": 628
        },
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 629,
          "end": 670
        },
        "abstract": false,
        "declare": false,
        "start": 546,
        "end": 670
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 539,
      "end": 670
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyClass4",
          "optional": false,
          "typeAnnotation": null,
          "start": 686,
          "end": 694
        },
        "typeParameters": null,
        "superClass": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getExportedClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 703,
            "end": 719
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LocalInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 720,
                  "end": 734
                },
                "typeArguments": null,
                "start": 720,
                "end": 734
              }
            ],
            "start": 719,
            "end": 735
          },
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 736,
              "end": 745
            }
          ],
          "optional": false,
          "start": 703,
          "end": 746
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ExportedInterface",
                "optional": false,
                "typeAnnotation": null,
                "start": 747,
                "end": 764
              },
              "typeArguments": null,
              "start": 747,
              "end": 764
            }
          ],
          "start": 746,
          "end": 765
        },
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 766,
          "end": 775
        },
        "abstract": false,
        "declare": false,
        "start": 680,
        "end": 775
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 673,
      "end": 775
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 775
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
    "value": "class",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "ExportedClass",
    "start": 13,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 33,
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
    "value": "T",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 42,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "LocalClass",
    "start": 48,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 71,
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
    "value": "T",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 90,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 97,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "ExportedInterface",
    "start": 107,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 131,
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
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 145,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "LocalInterface",
    "start": 155,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 179,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 190,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "getLocalClass",
    "start": 199,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 222,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 228,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "LocalClass",
    "start": 235,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 247,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 250,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "getExportedClass",
    "start": 259,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 279,
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
    "value": "T",
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
    "value": "{",
    "start": 285,
    "end": 286
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 291,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "ExportedClass",
    "start": 298,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 313,
    "end": 314
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 318,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 325,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 331,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 339,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "getLocalClass",
    "start": 347,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "LocalInterface",
    "start": 361,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 377,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 388,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 396,
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
    "value": "{",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 441,
    "end": 442
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 445,
    "end": 451
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 452,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "MyClass2",
    "start": 458,
    "end": 466
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 467,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "getExportedClass",
    "start": 475,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "LocalInterface",
    "start": 492,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 508,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 519,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 535,
    "end": 536
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 539,
    "end": 545
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 546,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "MyClass3",
    "start": 552,
    "end": 560
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 561,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "getExportedClass",
    "start": 569,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "LocalInterface",
    "start": 586,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 602,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "LocalInterface",
    "start": 613,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 669,
    "end": 670
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 673,
    "end": 679
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 680,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "MyClass4",
    "start": 686,
    "end": 694
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 695,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "getExportedClass",
    "start": 703,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "LocalInterface",
    "start": 720,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 736,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "ExportedInterface",
    "start": 747,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 774,
    "end": 775
  }
]
```
