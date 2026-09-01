__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "init": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 15,
              "end": 17
            },
            "definite": false,
            "start": 11,
            "end": 17
          }
        ],
        "declare": false,
        "start": 7,
        "end": 18
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 18
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 21
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
    "value": "var",
    "start": 7,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 15,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 17,
    "end": 18
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "nameSpaceBinding",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 28
          },
          "start": 7,
          "end": 28
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportNameSpaceImportInEs5_0",
        "raw": "\"./es6ImportNameSpaceImportInEs5_0\"",
        "start": 34,
        "end": 69
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 70
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
            "typeAnnotation": null,
            "start": 75,
            "end": 76
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "nameSpaceBinding",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 95
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 97
            },
            "optional": false,
            "computed": false,
            "start": 79,
            "end": 97
          },
          "definite": false,
          "start": 75,
          "end": 97
        }
      ],
      "declare": false,
      "start": 71,
      "end": 98
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "nameSpaceBinding2",
            "optional": false,
            "typeAnnotation": null,
            "start": 111,
            "end": 128
          },
          "start": 106,
          "end": 128
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportNameSpaceImportInEs5_0",
        "raw": "\"./es6ImportNameSpaceImportInEs5_0\"",
        "start": 134,
        "end": 169
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 99,
      "end": 170
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 184
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
    "value": "*",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 9,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "nameSpaceBinding",
    "start": 12,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 29,
    "end": 33
  },
  {
    "type": "String",
    "value": "\"./es6ImportNameSpaceImportInEs5_0\"",
    "start": 34,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 71,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "nameSpaceBinding",
    "start": 79,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 99,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 108,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "nameSpaceBinding2",
    "start": 111,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 129,
    "end": 133
  },
  {
    "type": "String",
    "value": "\"./es6ImportNameSpaceImportInEs5_0\"",
    "start": 134,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170
  }
]
```
