__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "empty",
            "optional": false,
            "typeAnnotation": null,
            "start": 153,
            "end": 158
          },
          "init": {
            "type": "Literal",
            "value": "empty",
            "raw": "\"empty\"",
            "start": 161,
            "end": 168
          },
          "definite": false,
          "start": 153,
          "end": 168
        }
      ],
      "declare": false,
      "start": 147,
      "end": 169
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
            "name": "empty",
            "optional": false,
            "typeAnnotation": null,
            "start": 179,
            "end": 184
          },
          "exported": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 188,
            "end": 190
          },
          "exportKind": "value",
          "start": 179,
          "end": 190
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 170,
      "end": 193
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 203,
            "end": 205
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 209,
            "end": 212
          },
          "importKind": "value",
          "start": 203,
          "end": 212
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./arbitraryModuleNamespaceIdentifiers_exportEmpty",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_exportEmpty\"",
        "start": 220,
        "end": 271
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 194,
      "end": 272
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
            "name": "bar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "type error expected here",
                  "raw": "\"type error expected here\"",
                  "start": 284,
                  "end": 310
                },
                "start": 284,
                "end": 310
              },
              "start": 282,
              "end": 310
            },
            "start": 279,
            "end": 310
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 313,
            "end": 316
          },
          "definite": false,
          "start": 279,
          "end": 316
        }
      ],
      "declare": false,
      "start": 273,
      "end": 317
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 147,
  "end": 317
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 147,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "empty",
    "start": 153,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 159,
    "end": 160
  },
  {
    "type": "String",
    "value": "\"empty\"",
    "start": 161,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 170,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "empty",
    "start": 179,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 185,
    "end": 187
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 188,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 194,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 203,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 206,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 209,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 215,
    "end": 219
  },
  {
    "type": "String",
    "value": "\"./arbitraryModuleNamespaceIdentifiers_exportEmpty\"",
    "start": 220,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 273,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 279,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 282,
    "end": 283
  },
  {
    "type": "String",
    "value": "\"type error expected here\"",
    "start": 284,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 313,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 316,
    "end": 317
  }
]
```
