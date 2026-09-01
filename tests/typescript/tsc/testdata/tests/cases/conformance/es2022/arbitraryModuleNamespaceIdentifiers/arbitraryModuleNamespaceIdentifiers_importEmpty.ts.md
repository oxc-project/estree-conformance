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
            "type": "Literal",
            "value": "missing",
            "raw": "\"missing\"",
            "start": 150,
            "end": 159
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 163,
            "end": 164
          },
          "importKind": "value",
          "start": 150,
          "end": 164
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Literal",
            "value": "(missing)",
            "raw": "\"(missing)\"",
            "start": 168,
            "end": 179
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 183,
            "end": 184
          },
          "importKind": "value",
          "start": 168,
          "end": 184
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 188,
            "end": 190
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 194,
            "end": 195
          },
          "importKind": "value",
          "start": 188,
          "end": 195
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./arbitraryModuleNamespaceIdentifiers_importEmpty",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_importEmpty\"",
        "start": 204,
        "end": 255
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 139,
      "end": 256
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
            "name": "xyz",
            "optional": false,
            "typeAnnotation": null,
            "start": 263,
            "end": 266
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 270,
                "end": 271
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 273,
                "end": 274
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 276,
                "end": 277
              }
            ],
            "start": 269,
            "end": 278
          },
          "definite": false,
          "start": 263,
          "end": 278
        }
      ],
      "declare": false,
      "start": 257,
      "end": 279
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 139,
  "end": 279
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 139,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147
  },
  {
    "type": "String",
    "value": "\"missing\"",
    "start": 150,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 160,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 164,
    "end": 165
  },
  {
    "type": "String",
    "value": "\"(missing)\"",
    "start": 168,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 180,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 184,
    "end": 185
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 188,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 191,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 199,
    "end": 203
  },
  {
    "type": "String",
    "value": "\"./arbitraryModuleNamespaceIdentifiers_importEmpty\"",
    "start": 204,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 257,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "xyz",
    "start": 263,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279
  }
]
```
