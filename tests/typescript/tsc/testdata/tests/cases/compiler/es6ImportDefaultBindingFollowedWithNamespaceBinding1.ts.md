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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 8,
            "end": 10
          },
          "definite": false,
          "start": 4,
          "end": 10
        }
      ],
      "declare": false,
      "start": 0,
      "end": 11
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 28
      },
      "exportKind": "value",
      "start": 12,
      "end": 29
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 30
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
    "value": "a",
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
    "value": "10",
    "start": 8,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10,
    "end": 11
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 12,
    "end": 18
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 19,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
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
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 21
          },
          "start": 7,
          "end": 21
        },
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "nameSpaceBinding",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 44
          },
          "start": 23,
          "end": 44
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportDefaultBindingFollowedWithNamespaceBinding_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamespaceBinding_0\"",
        "start": 51,
        "end": 108
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 109
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 117,
                "end": 123
              },
              "start": 115,
              "end": 123
            },
            "start": 114,
            "end": 123
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 140
          },
          "definite": false,
          "start": 114,
          "end": 140
        }
      ],
      "declare": false,
      "start": 110,
      "end": 141
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 141
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
    "type": "Identifier",
    "value": "defaultBinding",
    "start": 7,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 25,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "nameSpaceBinding",
    "start": 28,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 46,
    "end": 50
  },
  {
    "type": "String",
    "value": "\"./es6ImportDefaultBindingFollowedWithNamespaceBinding_0\"",
    "start": 51,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 110,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 117,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "defaultBinding",
    "start": 126,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  }
]
```
