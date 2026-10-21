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
            "name": "short",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "short",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "exportKind": "value",
          "start": 9,
          "end": 14
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./Widget.z",
        "raw": "\"./Widget.z\"",
        "start": 22,
        "end": 34
      },
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 35
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
            "name": "long",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 49
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "long",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 49
          },
          "exportKind": "value",
          "start": 45,
          "end": 49
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./Widget.y.z",
        "raw": "\"./Widget.y.z\"",
        "start": 57,
        "end": 71
      },
      "exportKind": "value",
      "attributes": [],
      "start": 36,
      "end": 72
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
            "name": "identity",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 90
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "identity",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 90
          },
          "exportKind": "value",
          "start": 82,
          "end": 90
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./Widget.identity.y.z",
        "raw": "\"./Widget.identity.y.z\"",
        "start": 98,
        "end": 121
      },
      "exportKind": "value",
      "attributes": [],
      "start": 73,
      "end": 122
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
            "name": "unmapped",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 140
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "unmapped",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 140
          },
          "exportKind": "value",
          "start": 132,
          "end": 140
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./Widget.unmapped.y.z",
        "raw": "\"./Widget.unmapped.y.z\"",
        "start": 148,
        "end": 171
      },
      "exportKind": "value",
      "attributes": [],
      "start": 123,
      "end": 172
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "literal",
          "optional": false,
          "typeAnnotation": null,
          "start": 189,
          "end": 196
        },
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
                "type": "ImportExpression",
                "source": {
                  "type": "Literal",
                  "value": "./Widget.y.z",
                  "raw": "\"./Widget.y.z\"",
                  "start": 215,
                  "end": 229
                },
                "options": null,
                "phase": null,
                "start": 208,
                "end": 230
              },
              "start": 201,
              "end": 231
            }
          ],
          "start": 199,
          "end": 233
        },
        "expression": false,
        "start": 180,
        "end": 233
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 173,
      "end": 233
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "dynamic",
          "optional": false,
          "typeAnnotation": null,
          "start": 250,
          "end": 257
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "path",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 264,
                "end": 270
              },
              "start": 262,
              "end": 270
            },
            "start": 258,
            "end": 270
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ImportExpression",
                "source": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "path",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 288,
                  "end": 292
                },
                "options": null,
                "phase": null,
                "start": 281,
                "end": 293
              },
              "start": 274,
              "end": 294
            }
          ],
          "start": 272,
          "end": 296
        },
        "expression": false,
        "start": 241,
        "end": 296
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 234,
      "end": 296
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
              "name": "inferred",
              "optional": false,
              "typeAnnotation": null,
              "start": 310,
              "end": 318
            },
            "init": {
              "type": "ImportExpression",
              "source": {
                "type": "Literal",
                "value": "./Widget.y.z",
                "raw": "\"./Widget.y.z\"",
                "start": 328,
                "end": 342
              },
              "options": null,
              "phase": null,
              "start": 321,
              "end": 343
            },
            "definite": false,
            "start": 310,
            "end": 343
          }
        ],
        "declare": false,
        "start": 304,
        "end": 344
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 297,
      "end": 344
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 344
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
    "value": "short",
    "start": 9,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 17,
    "end": 21
  },
  {
    "type": "String",
    "value": "\"./Widget.z\"",
    "start": 22,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "long",
    "start": 45,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 52,
    "end": 56
  },
  {
    "type": "String",
    "value": "\"./Widget.y.z\"",
    "start": 57,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 73,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 82,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 93,
    "end": 97
  },
  {
    "type": "String",
    "value": "\"./Widget.identity.y.z\"",
    "start": 98,
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
    "value": "export",
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
    "value": "unmapped",
    "start": 132,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 143,
    "end": 147
  },
  {
    "type": "String",
    "value": "\"./Widget.unmapped.y.z\"",
    "start": 148,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 173,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 180,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "literal",
    "start": 189,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 199,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 201,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 208,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 214,
    "end": 215
  },
  {
    "type": "String",
    "value": "\"./Widget.y.z\"",
    "start": 215,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 232,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 234,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 241,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "dynamic",
    "start": 250,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 258,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 264,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 272,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 274,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 281,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 288,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 295,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 297,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 304,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "inferred",
    "start": 310,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 319,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 321,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 327,
    "end": 328
  },
  {
    "type": "String",
    "value": "\"./Widget.y.z\"",
    "start": 328,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 343,
    "end": 344
  }
]
```
