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
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 15,
          "end": 17
        },
        "abstract": false,
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
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null,
          "start": 35,
          "end": 36
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 37,
          "end": 39
        },
        "declare": false,
        "start": 25,
        "end": 39
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 18,
      "end": 39
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 40
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
    "value": "A",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "interface",
    "start": 25,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 38,
    "end": 39
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
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
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 8,
            "end": 9
          },
          "definite": false,
          "start": 4,
          "end": 9
        }
      ],
      "declare": false,
      "start": 0,
      "end": 10
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 21,
        "end": 22
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 23,
        "end": 26
      },
      "declare": false,
      "start": 11,
      "end": 26
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 39
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 54,
                    "end": 55
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 58,
                    "end": 59
                  },
                  "definite": false,
                  "start": 54,
                  "end": 59
                }
              ],
              "declare": false,
              "start": 50,
              "end": 60
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 43,
            "end": 60
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
                "start": 79,
                "end": 80
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 81,
                "end": 84
              },
              "declare": false,
              "start": 69,
              "end": 84
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 62,
            "end": 84
          }
        ],
        "start": 40,
        "end": 87
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 28,
      "end": 87
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IX",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 98
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "N",
          "optional": false,
          "typeAnnotation": null,
          "start": 101,
          "end": 102
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 103,
          "end": 104
        },
        "start": 101,
        "end": 104
      },
      "importKind": "value",
      "start": 89,
      "end": 105
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "II",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 115
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "N",
          "optional": false,
          "typeAnnotation": null,
          "start": 118,
          "end": 119
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null,
          "start": 120,
          "end": 121
        },
        "start": 118,
        "end": 121
      },
      "importKind": "value",
      "start": 106,
      "end": 122
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 133
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 133
          },
          "importKind": "value",
          "start": 132,
          "end": 133
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 135,
            "end": 136
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "EA",
            "optional": false,
            "typeAnnotation": null,
            "start": 140,
            "end": 142
          },
          "importKind": "value",
          "start": 135,
          "end": 142
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 145
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "EI",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 151
          },
          "importKind": "value",
          "start": 144,
          "end": 151
        }
      ],
      "source": {
        "type": "Literal",
        "value": "f1",
        "raw": "\"f1\"",
        "start": 159,
        "end": 163
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 123,
      "end": 164
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 175
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 175
          },
          "exportKind": "value",
          "start": 174,
          "end": 175
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 166,
      "end": 177
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 186,
            "end": 187
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 191,
            "end": 193
          },
          "exportKind": "value",
          "start": 186,
          "end": 193
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 178,
      "end": 195
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
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 205,
            "end": 206
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 205,
            "end": 206
          },
          "exportKind": "value",
          "start": 205,
          "end": 206
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 197,
      "end": 208
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
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 218
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "I1",
            "optional": false,
            "typeAnnotation": null,
            "start": 222,
            "end": 224
          },
          "exportKind": "value",
          "start": 217,
          "end": 224
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 209,
      "end": 226
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
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 236,
            "end": 237
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 236,
            "end": 237
          },
          "exportKind": "value",
          "start": 236,
          "end": 237
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 228,
      "end": 239
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
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 248,
            "end": 249
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "A1",
            "optional": false,
            "typeAnnotation": null,
            "start": 253,
            "end": 255
          },
          "exportKind": "value",
          "start": 248,
          "end": 255
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 240,
      "end": 257
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
            "name": "EA",
            "optional": false,
            "typeAnnotation": null,
            "start": 267,
            "end": 269
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "EA",
            "optional": false,
            "typeAnnotation": null,
            "start": 267,
            "end": 269
          },
          "exportKind": "value",
          "start": 267,
          "end": 269
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 259,
      "end": 271
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
            "name": "EA",
            "optional": false,
            "typeAnnotation": null,
            "start": 280,
            "end": 282
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "EA1",
            "optional": false,
            "typeAnnotation": null,
            "start": 286,
            "end": 289
          },
          "exportKind": "value",
          "start": 280,
          "end": 289
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 272,
      "end": 291
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
            "name": "EI",
            "optional": false,
            "typeAnnotation": null,
            "start": 301,
            "end": 303
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "EI",
            "optional": false,
            "typeAnnotation": null,
            "start": 301,
            "end": 303
          },
          "exportKind": "value",
          "start": 301,
          "end": 303
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 293,
      "end": 306
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
            "name": "EI",
            "optional": false,
            "typeAnnotation": null,
            "start": 315,
            "end": 317
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "EI1",
            "optional": false,
            "typeAnnotation": null,
            "start": 321,
            "end": 324
          },
          "exportKind": "value",
          "start": 315,
          "end": 324
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 307,
      "end": 326
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
            "name": "IX",
            "optional": false,
            "typeAnnotation": null,
            "start": 336,
            "end": 338
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "IX",
            "optional": false,
            "typeAnnotation": null,
            "start": 336,
            "end": 338
          },
          "exportKind": "value",
          "start": 336,
          "end": 338
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 328,
      "end": 340
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
            "name": "IX",
            "optional": false,
            "typeAnnotation": null,
            "start": 349,
            "end": 351
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "IX1",
            "optional": false,
            "typeAnnotation": null,
            "start": 355,
            "end": 358
          },
          "exportKind": "value",
          "start": 349,
          "end": 358
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 341,
      "end": 360
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
            "name": "II",
            "optional": false,
            "typeAnnotation": null,
            "start": 370,
            "end": 372
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "II",
            "optional": false,
            "typeAnnotation": null,
            "start": 370,
            "end": 372
          },
          "exportKind": "value",
          "start": 370,
          "end": 372
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 362,
      "end": 374
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
            "name": "II",
            "optional": false,
            "typeAnnotation": null,
            "start": 383,
            "end": 385
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "II1",
            "optional": false,
            "typeAnnotation": null,
            "start": 389,
            "end": 392
          },
          "exportKind": "value",
          "start": 383,
          "end": 392
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 375,
      "end": 394
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 394
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 11,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 28,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "N",
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
    "value": "x",
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
    "type": "Numeric",
    "value": "1",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 62,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 69,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 89,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "IX",
    "start": 96,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 106,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "II",
    "start": 113,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 123,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 137,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "EA",
    "start": 140,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 146,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "EI",
    "start": 149,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 154,
    "end": 158
  },
  {
    "type": "String",
    "value": "\"f1\"",
    "start": 159,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 166,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 178,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 188,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 191,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 197,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 209,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 219,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 222,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 228,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 238,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 240,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 250,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 253,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 256,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 259,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "EA",
    "start": 267,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 272,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "EA",
    "start": 280,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 283,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "EA1",
    "start": 286,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 290,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 293,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "EI",
    "start": 301,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "{",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "EI",
    "start": 315,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 318,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "EI1",
    "start": 321,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 325,
    "end": 326
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 328,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "IX",
    "start": 336,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 339,
    "end": 340
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 341,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "IX",
    "start": 349,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 352,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "IX1",
    "start": 355,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 362,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "II",
    "start": 370,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 373,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 375,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "II",
    "start": 383,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 386,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "II1",
    "start": 389,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 393,
    "end": 394
  }
]
```
