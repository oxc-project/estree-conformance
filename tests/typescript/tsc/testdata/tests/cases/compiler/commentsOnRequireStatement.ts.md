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
              "name": "subject",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 18
            },
            "init": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 21,
              "end": 23
            },
            "definite": false,
            "start": 11,
            "end": 23
          }
        ],
        "declare": false,
        "start": 7,
        "end": 24
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 24
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 25
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
    "value": "subject",
    "start": 11,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 19,
    "end": 20
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 21,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 23,
    "end": 24
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
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "subject1",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 19
            },
            "init": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 22,
              "end": 24
            },
            "definite": false,
            "start": 11,
            "end": 24
          }
        ],
        "declare": false,
        "start": 7,
        "end": 25
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 25
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
    "value": "var",
    "start": 7,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "subject1",
    "start": 11,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 20,
    "end": 21
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 22,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 24,
    "end": 25
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
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "subject",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 54
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "subject",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 54
          },
          "exportKind": "value",
          "start": 47,
          "end": 54
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./0",
        "raw": "'./0'",
        "start": 61,
        "end": 66
      },
      "exportKind": "value",
      "attributes": [],
      "start": 39,
      "end": 67
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
            "name": "subject1",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 96
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "subject1",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 96
          },
          "exportKind": "value",
          "start": 88,
          "end": 96
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./1",
        "raw": "'./1'",
        "start": 103,
        "end": 108
      },
      "exportKind": "value",
      "attributes": [],
      "start": 80,
      "end": 109
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 39,
  "end": 109
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 39,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "subject",
    "start": 47,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 56,
    "end": 60
  },
  {
    "type": "String",
    "value": "'./0'",
    "start": 61,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 80,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "subject1",
    "start": 88,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 98,
    "end": 102
  },
  {
    "type": "String",
    "value": "'./1'",
    "start": 103,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  }
]
```
