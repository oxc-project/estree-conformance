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
          "name": "Props",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
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
                "name": "title",
                "optional": false,
                "typeAnnotation": null,
                "start": 25,
                "end": 30
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 32,
                  "end": 38
                },
                "start": 30,
                "end": 38
              },
              "accessibility": null,
              "static": false,
              "start": 25,
              "end": 38
            }
          ],
          "start": 23,
          "end": 40
        },
        "declare": false,
        "start": 7,
        "end": 40
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 40
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 41
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
    "value": "interface",
    "start": 7,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 17,
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
    "value": "title",
    "start": 25,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 39,
    "end": 40
  }
]
```
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
          "name": "NativeProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 28
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
                "name": "title",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 36
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 38,
                  "end": 44
                },
                "start": 36,
                "end": 44
              },
              "accessibility": null,
              "static": false,
              "start": 31,
              "end": 44
            }
          ],
          "start": 29,
          "end": 46
        },
        "declare": false,
        "start": 7,
        "end": 46
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 46
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 47
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
    "value": "interface",
    "start": 7,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "NativeProps",
    "start": 17,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 31,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 38,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 45,
    "end": 46
  }
]
```
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
          "name": "AmbientProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 29
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
                "name": "title",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 37
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 39,
                  "end": 45
                },
                "start": 37,
                "end": 45
              },
              "accessibility": null,
              "static": false,
              "start": 32,
              "end": 45
            }
          ],
          "start": 30,
          "end": 47
        },
        "declare": false,
        "start": 7,
        "end": 47
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 47
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 48
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
    "value": "interface",
    "start": 7,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "AmbientProps",
    "start": 17,
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
    "value": "title",
    "start": 32,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 39,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "existing",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSImportType",
                  "source": {
                    "type": "Literal",
                    "value": "./components.astro",
                    "raw": "\"./components.astro\"",
                    "start": 38,
                    "end": 58
                  },
                  "options": null,
                  "qualifier": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 60,
                    "end": 65
                  },
                  "typeArguments": null,
                  "start": 31,
                  "end": 65
                },
                "start": 29,
                "end": 65
              },
              "start": 21,
              "end": 65
            },
            "init": null,
            "definite": false,
            "start": 21,
            "end": 65
          }
        ],
        "declare": true,
        "start": 7,
        "end": 66
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 66
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 67
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
    "type": "Identifier",
    "value": "declare",
    "start": 7,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 15,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "existing",
    "start": 21,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "String",
    "value": "\"./components.astro\"",
    "start": 38,
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
    "value": ".",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 60,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Props",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 19
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Props",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 19
          },
          "exportKind": "value",
          "start": 14,
          "end": 19
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./components.astro",
        "raw": "\"./components.astro\"",
        "start": 27,
        "end": 47
      },
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 48
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./components.astro",
        "raw": "\"./components.astro\"",
        "start": 68,
        "end": 88
      },
      "attributes": [],
      "exportKind": "type",
      "start": 49,
      "end": 89
    },
    {
      "type": "ExportAllDeclaration",
      "exported": {
        "type": "Identifier",
        "decorators": [],
        "name": "Namespace",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 116
      },
      "source": {
        "type": "Literal",
        "value": "./components.astro",
        "raw": "\"./components.astro\"",
        "start": 122,
        "end": 142
      },
      "attributes": [],
      "exportKind": "type",
      "start": 90,
      "end": 143
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Props",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 163
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "InlineProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 167,
            "end": 178
          },
          "exportKind": "type",
          "start": 153,
          "end": 178
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./components.astro",
        "raw": "\"./components.astro\"",
        "start": 186,
        "end": 206
      },
      "exportKind": "value",
      "attributes": [],
      "start": 144,
      "end": 207
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Props",
            "optional": false,
            "typeAnnotation": null,
            "start": 222,
            "end": 227
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ImportedProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 231,
            "end": 244
          },
          "importKind": "value",
          "start": 222,
          "end": 244
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./components.astro",
        "raw": "\"./components.astro\"",
        "start": 252,
        "end": 272
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 208,
      "end": 273
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Alias",
          "optional": false,
          "typeAnnotation": null,
          "start": 286,
          "end": 291
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ImportedProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 294,
            "end": 307
          },
          "typeArguments": null,
          "start": 294,
          "end": 307
        },
        "declare": false,
        "start": 281,
        "end": 308
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 274,
      "end": 308
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Props",
            "optional": false,
            "typeAnnotation": null,
            "start": 323,
            "end": 328
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "InlineImportedProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 332,
            "end": 351
          },
          "importKind": "type",
          "start": 318,
          "end": 351
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./components.astro",
        "raw": "\"./components.astro\"",
        "start": 359,
        "end": 379
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 309,
      "end": 380
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "InlineAlias",
          "optional": false,
          "typeAnnotation": null,
          "start": 393,
          "end": 404
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "InlineImportedProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 407,
            "end": 426
          },
          "typeArguments": null,
          "start": 407,
          "end": 426
        },
        "declare": false,
        "start": 388,
        "end": 427
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 381,
      "end": 427
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ImportType",
          "optional": false,
          "typeAnnotation": null,
          "start": 440,
          "end": 450
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSImportType",
          "source": {
            "type": "Literal",
            "value": "./components.astro",
            "raw": "\"./components.astro\"",
            "start": 460,
            "end": 480
          },
          "options": null,
          "qualifier": {
            "type": "Identifier",
            "decorators": [],
            "name": "Props",
            "optional": false,
            "typeAnnotation": null,
            "start": 482,
            "end": 487
          },
          "typeArguments": null,
          "start": 453,
          "end": 487
        },
        "declare": false,
        "start": 435,
        "end": 488
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 428,
      "end": 488
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "props",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSImportType",
                  "source": {
                    "type": "Literal",
                    "value": "./components.astro",
                    "raw": "\"./components.astro\"",
                    "start": 524,
                    "end": 544
                  },
                  "options": null,
                  "qualifier": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 546,
                    "end": 551
                  },
                  "typeArguments": null,
                  "start": 517,
                  "end": 551
                },
                "start": 515,
                "end": 551
              },
              "start": 510,
              "end": 551
            },
            "init": null,
            "definite": false,
            "start": 510,
            "end": 551
          }
        ],
        "declare": true,
        "start": 496,
        "end": 552
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 489,
      "end": 552
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "AmbientProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 567,
            "end": 579
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "AmbientProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 567,
            "end": 579
          },
          "exportKind": "value",
          "start": 567,
          "end": 579
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./ambient.astro",
        "raw": "\"./ambient.astro\"",
        "start": 587,
        "end": 604
      },
      "exportKind": "type",
      "attributes": [],
      "start": 553,
      "end": 605
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "NativeImportType",
          "optional": false,
          "typeAnnotation": null,
          "start": 618,
          "end": 634
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSImportType",
          "source": {
            "type": "Literal",
            "value": "./native.ts",
            "raw": "\"./native.ts\"",
            "start": 644,
            "end": 657
          },
          "options": null,
          "qualifier": {
            "type": "Identifier",
            "decorators": [],
            "name": "NativeProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 659,
            "end": 670
          },
          "typeArguments": null,
          "start": 637,
          "end": 670
        },
        "declare": false,
        "start": 613,
        "end": 671
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 606,
      "end": 671
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ActualProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 686,
            "end": 697
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ActualProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 686,
            "end": 697
          },
          "exportKind": "value",
          "start": 686,
          "end": 697
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./actual.astro",
        "raw": "\"./actual.astro\"",
        "start": 705,
        "end": 721
      },
      "exportKind": "type",
      "attributes": [],
      "start": 672,
      "end": 722
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ActualProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 737,
            "end": 748
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ActualProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 737,
            "end": 748
          },
          "importKind": "value",
          "start": 737,
          "end": 748
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./actual.astro",
        "raw": "\"./actual.astro\"",
        "start": 756,
        "end": 772
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 723,
      "end": 773
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ActualAlias",
          "optional": false,
          "typeAnnotation": null,
          "start": 786,
          "end": 797
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ActualProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 800,
            "end": 811
          },
          "typeArguments": null,
          "start": 800,
          "end": 811
        },
        "declare": false,
        "start": 781,
        "end": 812
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 774,
      "end": 812
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ActualImportType",
          "optional": false,
          "typeAnnotation": null,
          "start": 825,
          "end": 841
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSImportType",
          "source": {
            "type": "Literal",
            "value": "./actual.astro",
            "raw": "\"./actual.astro\"",
            "start": 851,
            "end": 867
          },
          "options": null,
          "qualifier": {
            "type": "Identifier",
            "decorators": [],
            "name": "ActualProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 869,
            "end": 880
          },
          "typeArguments": null,
          "start": 844,
          "end": 880
        },
        "declare": false,
        "start": 820,
        "end": 881
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 813,
      "end": 881
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "actualProps",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSImportType",
                  "source": {
                    "type": "Literal",
                    "value": "./actual.astro",
                    "raw": "\"./actual.astro\"",
                    "start": 923,
                    "end": 939
                  },
                  "options": null,
                  "qualifier": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ActualProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 941,
                    "end": 952
                  },
                  "typeArguments": null,
                  "start": 916,
                  "end": 952
                },
                "start": 914,
                "end": 952
              },
              "start": 903,
              "end": 952
            },
            "init": null,
            "definite": false,
            "start": 903,
            "end": 952
          }
        ],
        "declare": true,
        "start": 889,
        "end": 953
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 882,
      "end": 953
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 953
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
    "type": "Identifier",
    "value": "type",
    "start": 7,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 14,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 22,
    "end": 26
  },
  {
    "type": "String",
    "value": "\"./components.astro\"",
    "start": 27,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 49,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 56,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 63,
    "end": 67
  },
  {
    "type": "String",
    "value": "\"./components.astro\"",
    "start": 68,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 90,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 97,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 104,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "Namespace",
    "start": 107,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 117,
    "end": 121
  },
  {
    "type": "String",
    "value": "\"./components.astro\"",
    "start": 122,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 144,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 153,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 158,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 164,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "InlineProps",
    "start": 167,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 181,
    "end": 185
  },
  {
    "type": "String",
    "value": "\"./components.astro\"",
    "start": 186,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 208,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 215,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 222,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 228,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "ImportedProps",
    "start": 231,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 247,
    "end": 251
  },
  {
    "type": "String",
    "value": "\"./components.astro\"",
    "start": 252,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 274,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 281,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "Alias",
    "start": 286,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "ImportedProps",
    "start": 294,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 307,
    "end": 308
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 309,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 318,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 323,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 329,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "InlineImportedProps",
    "start": 332,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 354,
    "end": 358
  },
  {
    "type": "String",
    "value": "\"./components.astro\"",
    "start": 359,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 379,
    "end": 380
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 381,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 388,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "InlineAlias",
    "start": 393,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "InlineImportedProps",
    "start": 407,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 426,
    "end": 427
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 428,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 435,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "ImportType",
    "start": 440,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 451,
    "end": 452
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 453,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 459,
    "end": 460
  },
  {
    "type": "String",
    "value": "\"./components.astro\"",
    "start": 460,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 482,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 487,
    "end": 488
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 489,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 496,
    "end": 503
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 504,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 510,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 515,
    "end": 516
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 517,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 523,
    "end": 524
  },
  {
    "type": "String",
    "value": "\"./components.astro\"",
    "start": 524,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 546,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 551,
    "end": 552
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 553,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 560,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "AmbientProps",
    "start": 567,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 582,
    "end": 586
  },
  {
    "type": "String",
    "value": "\"./ambient.astro\"",
    "start": 587,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 604,
    "end": 605
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 606,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 613,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "NativeImportType",
    "start": 618,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 635,
    "end": 636
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 637,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 643,
    "end": 644
  },
  {
    "type": "String",
    "value": "\"./native.ts\"",
    "start": 644,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "NativeProps",
    "start": 659,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 670,
    "end": 671
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 672,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 679,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "ActualProps",
    "start": 686,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 700,
    "end": 704
  },
  {
    "type": "String",
    "value": "\"./actual.astro\"",
    "start": 705,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 721,
    "end": 722
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 723,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 730,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "ActualProps",
    "start": 737,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 751,
    "end": 755
  },
  {
    "type": "String",
    "value": "\"./actual.astro\"",
    "start": 756,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 772,
    "end": 773
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 774,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 781,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "ActualAlias",
    "start": 786,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 798,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "ActualProps",
    "start": 800,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 811,
    "end": 812
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 813,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 820,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "ActualImportType",
    "start": 825,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 842,
    "end": 843
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 844,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 850,
    "end": 851
  },
  {
    "type": "String",
    "value": "\"./actual.astro\"",
    "start": 851,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "ActualProps",
    "start": 869,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 880,
    "end": 881
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 882,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 889,
    "end": 896
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 897,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "actualProps",
    "start": 903,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 914,
    "end": 915
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 916,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 922,
    "end": 923
  },
  {
    "type": "String",
    "value": "\"./actual.astro\"",
    "start": 923,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "ActualProps",
    "start": 941,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 952,
    "end": 953
  }
]
```
