__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 15,
          "end": 16
        },
        "operator": "+",
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 19,
          "end": 20
        },
        "start": 15,
        "end": 20
      },
      "exportKind": "value",
      "start": 0,
      "end": 21
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 45
      },
      "start": 22,
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
    "value": "default",
    "start": 7,
    "end": 14
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 17,
    "end": 18
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 22,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 29,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 32,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 42,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ";",
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
      "type": "TSExportAssignment",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 9,
          "end": 10
        },
        "operator": "+",
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 13,
          "end": 14
        },
        "start": 9,
        "end": 14
      },
      "start": 0,
      "end": 15
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 40
      },
      "start": 16,
      "end": 41
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 42
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
    "type": "Numeric",
    "value": "2",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 11,
    "end": 12
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14,
    "end": 15
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 16,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 23,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 26,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "Foo2",
    "start": 36,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "indirect",
        "raw": "\"indirect\"",
        "start": 51,
        "end": 61
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportDefaultDeclaration",
            "declaration": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 90,
                  "end": 93
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "default",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 94,
                  "end": 101
                },
                "optional": false,
                "computed": false,
                "start": 90,
                "end": 101
              },
              "prefix": true,
              "start": 83,
              "end": 101
            },
            "exportKind": "value",
            "start": 68,
            "end": 102
          }
        ],
        "start": 62,
        "end": 104
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 36,
      "end": 104
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 36,
  "end": 105
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 36,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 44,
    "end": 50
  },
  {
    "type": "String",
    "value": "\"indirect\"",
    "start": 51,
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
    "value": "export",
    "start": 68,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 75,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 83,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 90,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 94,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 103,
    "end": 104
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "indirect2",
        "raw": "\"indirect2\"",
        "start": 52,
        "end": 63
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 86,
                "end": 90
              },
              "prefix": true,
              "start": 79,
              "end": 90
            },
            "start": 70,
            "end": 91
          }
        ],
        "start": 64,
        "end": 93
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 37,
      "end": 93
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 37,
  "end": 94
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 37,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 45,
    "end": 51
  },
  {
    "type": "String",
    "value": "\"indirect2\"",
    "start": 52,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 70,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 79,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "Foo2",
    "start": 86,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 92,
    "end": 93
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
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "indirect",
        "raw": "\"indirect\"",
        "start": 96,
        "end": 106
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 89,
      "end": 107
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "foo",
        "raw": "\"foo\"",
        "start": 115,
        "end": 120
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 108,
      "end": 121
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "indirect2",
        "raw": "\"indirect2\"",
        "start": 129,
        "end": 140
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 122,
      "end": 141
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "foo2",
        "raw": "\"foo2\"",
        "start": 149,
        "end": 155
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 142,
      "end": 156
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 89,
  "end": 156
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 89,
    "end": 95
  },
  {
    "type": "String",
    "value": "\"indirect\"",
    "start": 96,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 108,
    "end": 114
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 115,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 122,
    "end": 128
  },
  {
    "type": "String",
    "value": "\"indirect2\"",
    "start": 129,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 142,
    "end": 148
  },
  {
    "type": "String",
    "value": "\"foo2\"",
    "start": 149,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  }
]
```
