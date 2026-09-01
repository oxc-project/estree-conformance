__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 148
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 163
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 167
            },
            "importKind": "value",
            "start": 155,
            "end": 168
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 181
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 184,
              "end": 185
            },
            "importKind": "value",
            "start": 173,
            "end": 186
          }
        ],
        "start": 149,
        "end": 188
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 137,
      "end": 188
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 200,
        "end": 201
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 216
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 219,
              "end": 220
            },
            "importKind": "value",
            "start": 208,
            "end": 221
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 239,
                "end": 240
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 241,
                "end": 244
              },
              "abstract": false,
              "declare": false,
              "start": 233,
              "end": 244
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 226,
            "end": 244
          }
        ],
        "start": 202,
        "end": 246
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 190,
      "end": 246
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 258,
        "end": 259
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 273,
              "end": 274
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 277,
              "end": 278
            },
            "importKind": "value",
            "start": 266,
            "end": 279
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "hello",
              "optional": false,
              "typeAnnotation": null,
              "start": 293,
              "end": 298
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 302,
                    "end": 303
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 304,
                    "end": 305
                  },
                  "start": 302,
                  "end": 305
                },
                "typeArguments": null,
                "start": 302,
                "end": 305
              },
              "start": 300,
              "end": 305
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 315,
                    "end": 319
                  },
                  "start": 308,
                  "end": 320
                }
              ],
              "start": 306,
              "end": 322
            },
            "expression": false,
            "start": 284,
            "end": 322
          }
        ],
        "start": 260,
        "end": 324
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 248,
      "end": 324
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 137,
  "end": 324
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 137,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 155,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 173,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 184,
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
    "type": "Identifier",
    "value": "namespace",
    "start": 190,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 208,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "start": 226,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 233,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 243,
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
    "value": "namespace",
    "start": 248,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 266,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 284,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "hello",
    "start": 293,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 306,
    "end": 307
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 308,
    "end": 314
  },
  {
    "type": "Null",
    "value": "null",
    "start": 315,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 323,
    "end": 324
  }
]
```
