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
            "name": "v",
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
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 20,
        "end": 21
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
        "start": 24,
        "end": 27
      },
      "expression": false,
      "start": 11,
      "end": 27
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 34,
        "end": 35
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 36,
        "end": 39
      },
      "abstract": false,
      "declare": false,
      "start": 28,
      "end": 39
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 51
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 52,
        "end": 55
      },
      "declare": false,
      "start": 40,
      "end": 55
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 62
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
              "start": 69,
              "end": 70
            },
            "initializer": null,
            "computed": false,
            "start": 69,
            "end": 70
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 73
            },
            "initializer": null,
            "computed": false,
            "start": 72,
            "end": 73
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 76
            },
            "initializer": null,
            "computed": false,
            "start": 75,
            "end": 76
          }
        ],
        "start": 63,
        "end": 78
      },
      "const": false,
      "declare": false,
      "start": 56,
      "end": 78
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 91
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
              "start": 98,
              "end": 99
            },
            "initializer": null,
            "computed": false,
            "start": 98,
            "end": 99
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 102
            },
            "initializer": null,
            "computed": false,
            "start": 101,
            "end": 102
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 105
            },
            "initializer": null,
            "computed": false,
            "start": 104,
            "end": 105
          }
        ],
        "start": 92,
        "end": 107
      },
      "const": true,
      "declare": false,
      "start": 79,
      "end": 107
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 119
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
                    "start": 137,
                    "end": 138
                  },
                  "init": null,
                  "definite": false,
                  "start": 137,
                  "end": 138
                }
              ],
              "declare": false,
              "start": 133,
              "end": 139
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 126,
            "end": 139
          }
        ],
        "start": 120,
        "end": 141
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 108,
      "end": 141
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 153
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
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
                "start": 177,
                "end": 178
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 179,
                "end": 186
              },
              "declare": false,
              "start": 167,
              "end": 186
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 160,
            "end": 186
          }
        ],
        "start": 154,
        "end": 188
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 142,
      "end": 188
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 194,
        "end": 195
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSNumberKeyword",
        "start": 198,
        "end": 204
      },
      "declare": false,
      "start": 189,
      "end": 205
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 213,
        "end": 214
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 217,
          "end": 218
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 219,
          "end": 220
        },
        "start": 217,
        "end": 220
      },
      "importKind": "value",
      "start": 206,
      "end": 221
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
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 232,
            "end": 233
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 232,
            "end": 233
          },
          "exportKind": "value",
          "start": 232,
          "end": 233
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 235,
            "end": 236
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 235,
            "end": 236
          },
          "exportKind": "value",
          "start": 235,
          "end": 236
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 239
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 239
          },
          "exportKind": "value",
          "start": 238,
          "end": 239
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 242
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 242
          },
          "exportKind": "value",
          "start": 241,
          "end": 242
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 244,
            "end": 245
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 244,
            "end": 245
          },
          "exportKind": "value",
          "start": 244,
          "end": 245
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null,
            "start": 247,
            "end": 248
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null,
            "start": 247,
            "end": 248
          },
          "exportKind": "value",
          "start": 247,
          "end": 248
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 250,
            "end": 251
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 250,
            "end": 251
          },
          "exportKind": "value",
          "start": 250,
          "end": 251
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 253,
            "end": 254
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 253,
            "end": 254
          },
          "exportKind": "value",
          "start": 253,
          "end": 254
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 256,
            "end": 257
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 256,
            "end": 257
          },
          "exportKind": "value",
          "start": 256,
          "end": 257
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 259,
            "end": 260
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 259,
            "end": 260
          },
          "exportKind": "value",
          "start": 259,
          "end": 260
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 223,
      "end": 263
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 264
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
    "value": "v",
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
    "value": "function",
    "start": 11,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 26,
    "end": 27
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 28,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 38,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 40,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 56,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 79,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 85,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 90,
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
    "value": "A",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 108,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 126,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 133,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 142,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 154,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 160,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 167,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "type",
    "start": 189,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 198,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 206,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 223,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 262,
    "end": 263
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
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "exportKind": "value",
          "start": 9,
          "end": 10
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "exportKind": "value",
          "start": 12,
          "end": 13
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 16
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 16
          },
          "exportKind": "value",
          "start": 15,
          "end": 16
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 19
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 19
          },
          "exportKind": "value",
          "start": 18,
          "end": 19
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 22
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 22
          },
          "exportKind": "value",
          "start": 21,
          "end": 22
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 25
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 25
          },
          "exportKind": "value",
          "start": 24,
          "end": 25
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 28
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 28
          },
          "exportKind": "value",
          "start": 27,
          "end": 28
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 31
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 31
          },
          "exportKind": "value",
          "start": 30,
          "end": 31
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 33,
            "end": 34
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 33,
            "end": 34
          },
          "exportKind": "value",
          "start": 33,
          "end": 34
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 37
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 37
          },
          "exportKind": "value",
          "start": 36,
          "end": 37
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./t1",
        "raw": "\"./t1\"",
        "start": 45,
        "end": 51
      },
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 52
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 53
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 40,
    "end": 44
  },
  {
    "type": "String",
    "value": "\"./t1\"",
    "start": 45,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "importKind": "value",
          "start": 9,
          "end": 10
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "importKind": "value",
          "start": 12,
          "end": 13
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 16
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 16
          },
          "importKind": "value",
          "start": 15,
          "end": 16
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 19
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 19
          },
          "importKind": "value",
          "start": 18,
          "end": 19
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 22
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 22
          },
          "importKind": "value",
          "start": 21,
          "end": 22
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 25
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 25
          },
          "importKind": "value",
          "start": 24,
          "end": 25
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 28
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 28
          },
          "importKind": "value",
          "start": 27,
          "end": 28
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 31
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 31
          },
          "importKind": "value",
          "start": 30,
          "end": 31
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 33,
            "end": 34
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 33,
            "end": 34
          },
          "importKind": "value",
          "start": 33,
          "end": 34
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 37
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 37
          },
          "importKind": "value",
          "start": 36,
          "end": 37
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./t1",
        "raw": "\"./t1\"",
        "start": 45,
        "end": 51
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 52
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
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 63
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 63
          },
          "exportKind": "value",
          "start": 62,
          "end": 63
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 66
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 66
          },
          "exportKind": "value",
          "start": 65,
          "end": 66
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 69
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 69
          },
          "exportKind": "value",
          "start": 68,
          "end": 69
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 71,
            "end": 72
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 71,
            "end": 72
          },
          "exportKind": "value",
          "start": 71,
          "end": 72
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 75
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 75
          },
          "exportKind": "value",
          "start": 74,
          "end": 75
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 78
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 78
          },
          "exportKind": "value",
          "start": 77,
          "end": 78
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 80,
            "end": 81
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 80,
            "end": 81
          },
          "exportKind": "value",
          "start": 80,
          "end": 81
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 84
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 84
          },
          "exportKind": "value",
          "start": 83,
          "end": 84
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 87
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 87
          },
          "exportKind": "value",
          "start": 86,
          "end": 87
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 89,
            "end": 90
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 89,
            "end": 90
          },
          "exportKind": "value",
          "start": 89,
          "end": 90
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 53,
      "end": 93
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 93
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 40,
    "end": 44
  },
  {
    "type": "String",
    "value": "\"./t1\"",
    "start": 45,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 53,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "D",
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
    "value": "M",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  }
]
```
