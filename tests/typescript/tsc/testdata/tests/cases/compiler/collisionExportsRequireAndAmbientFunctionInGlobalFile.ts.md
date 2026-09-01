__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "exports",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 24
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 28,
          "end": 34
        },
        "start": 26,
        "end": 34
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 35
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "require",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 60
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 64,
          "end": 70
        },
        "start": 62,
        "end": 70
      },
      "body": null,
      "expression": false,
      "start": 36,
      "end": 71
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 92
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 115
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 119,
                  "end": 125
                },
                "start": 119,
                "end": 127
              },
              "start": 117,
              "end": 127
            },
            "body": null,
            "expression": false,
            "start": 99,
            "end": 128
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 142,
              "end": 149
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 153,
                  "end": 159
                },
                "start": 153,
                "end": 161
              },
              "start": 151,
              "end": 161
            },
            "body": null,
            "expression": false,
            "start": 133,
            "end": 162
          }
        ],
        "start": 93,
        "end": 164
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 72,
      "end": 164
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4",
        "optional": false,
        "typeAnnotation": null,
        "start": 175,
        "end": 177
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "exports",
                "optional": false,
                "typeAnnotation": null,
                "start": 208,
                "end": 215
              },
              "generator": false,
              "async": false,
              "declare": true,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 219,
                  "end": 225
                },
                "start": 217,
                "end": 225
              },
              "body": null,
              "expression": false,
              "start": 191,
              "end": 226
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 184,
            "end": 226
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null,
                "start": 255,
                "end": 262
              },
              "generator": false,
              "async": false,
              "declare": true,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 266,
                  "end": 272
                },
                "start": 264,
                "end": 272
              },
              "body": null,
              "expression": false,
              "start": 238,
              "end": 273
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 231,
            "end": 273
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 282,
                  "end": 283
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 286,
                  "end": 288
                },
                "definite": false,
                "start": 282,
                "end": 288
              }
            ],
            "declare": false,
            "start": 278,
            "end": 289
          }
        ],
        "start": 178,
        "end": 291
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 165,
      "end": 291
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 291
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
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 17,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 28,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 36,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 44,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 53,
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
    "type": "Identifier",
    "value": "string",
    "start": 64,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 72,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 80,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 90,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 99,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 108,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 119,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 133,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 142,
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
    "value": ":",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 153,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 165,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 175,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 184,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 191,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 199,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 208,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "string",
    "start": 219,
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
    "start": 231,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 238,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 246,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 255,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 263,
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
    "value": "string",
    "start": 266,
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
    "value": "var",
    "start": 278,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 284,
    "end": 285
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 286,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 290,
    "end": 291
  }
]
```
