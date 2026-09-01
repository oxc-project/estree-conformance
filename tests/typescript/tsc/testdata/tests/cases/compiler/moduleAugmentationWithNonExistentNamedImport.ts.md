__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "start": 0,
      "end": 13
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 34,
        "end": 37
      },
      "start": 14,
      "end": 38
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 61
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 80
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": null,
            "expression": false,
            "start": 68,
            "end": 83
          }
        ],
        "start": 62,
        "end": 85
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 40,
      "end": 85
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 101
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 121
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "start": 122,
              "end": 125
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 108,
            "end": 125
          }
        ],
        "start": 102,
        "end": 127
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 87,
      "end": 127
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 128
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
    "value": "=",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 9,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 14,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 21,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 24,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 34,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 40,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 48,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 58,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 68,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 77,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 87,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 95,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 108,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 118,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 126,
    "end": 127
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
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 12
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 12
          },
          "importKind": "value",
          "start": 9,
          "end": 12
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./foo",
        "raw": "'./foo'",
        "start": 20,
        "end": 27
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 28
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 41
      },
      "start": 29,
      "end": 42
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 66
      },
      "start": 43,
      "end": 67
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
    "value": "Bar",
    "start": 9,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 15,
    "end": 19
  },
  {
    "type": "String",
    "value": "'./foo'",
    "start": 20,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 29,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 38,
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
    "type": "Identifier",
    "value": "as",
    "start": 50,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 53,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 63,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  }
]
```
