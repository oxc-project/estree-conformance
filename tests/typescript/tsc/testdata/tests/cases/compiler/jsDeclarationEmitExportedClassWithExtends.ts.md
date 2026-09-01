__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "lit-element/lit-element.js",
        "raw": "\"lit-element/lit-element.js\"",
        "start": 14,
        "end": 42
      },
      "attributes": [],
      "exportKind": "value",
      "start": 0,
      "end": 43
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 43
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
    "value": "*",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 9,
    "end": 13
  },
  {
    "type": "String",
    "value": "\"lit-element/lit-element.js\"",
    "start": 14,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./lit-element.js",
        "raw": "\"./lit-element.js\"",
        "start": 14,
        "end": 32
      },
      "attributes": [],
      "exportKind": "value",
      "start": 0,
      "end": 33
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 33
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
    "value": "*",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 9,
    "end": 13
  },
  {
    "type": "String",
    "value": "\"./lit-element.js\"",
    "start": 14,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
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
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "LitElement",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 23
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 24,
          "end": 26
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 26
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 26
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 26
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
    "value": "LitElement",
    "start": 13,
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
    "start": 25,
    "end": 26
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
            "name": "LitElement",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 19
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "LitElement",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 19
          },
          "importKind": "value",
          "start": 9,
          "end": 19
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "LitElement",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 31
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "LitElement2",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 46
          },
          "importKind": "value",
          "start": 21,
          "end": 46
        }
      ],
      "source": {
        "type": "Literal",
        "value": "lit",
        "raw": "\"lit\"",
        "start": 54,
        "end": 59
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 60
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ElementB",
          "optional": false,
          "typeAnnotation": null,
          "start": 74,
          "end": 82
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "LitElement",
          "optional": false,
          "typeAnnotation": null,
          "start": 91,
          "end": 101
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 102,
          "end": 104
        },
        "abstract": false,
        "declare": false,
        "start": 68,
        "end": 104
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 61,
      "end": 104
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ElementC",
          "optional": false,
          "typeAnnotation": null,
          "start": 118,
          "end": 126
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "LitElement2",
          "optional": false,
          "typeAnnotation": null,
          "start": 135,
          "end": 146
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 147,
          "end": 149
        },
        "abstract": false,
        "declare": false,
        "start": 112,
        "end": 149
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 105,
      "end": 149
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 149
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
    "value": "LitElement",
    "start": 9,
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
    "value": "LitElement",
    "start": 21,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 32,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "LitElement2",
    "start": 35,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 49,
    "end": 53
  },
  {
    "type": "String",
    "value": "\"lit\"",
    "start": 54,
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
    "start": 61,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 68,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "ElementB",
    "start": 74,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 83,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "LitElement",
    "start": 91,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 103,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 105,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 112,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "ElementC",
    "start": 118,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 127,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "LitElement2",
    "start": 135,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 148,
    "end": 149
  }
]
```
