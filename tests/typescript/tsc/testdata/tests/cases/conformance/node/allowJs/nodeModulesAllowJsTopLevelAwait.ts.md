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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 26
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 35,
              "end": 36
            },
            "start": 29,
            "end": 36
          },
          "definite": false,
          "start": 25,
          "end": 36
        }
      ],
      "declare": false,
      "start": 19,
      "end": 37
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 47
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 47
          },
          "exportKind": "value",
          "start": 46,
          "end": 47
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 38,
      "end": 49
    },
    {
      "type": "ForOfStatement",
      "await": true,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 68
            },
            "init": null,
            "definite": false,
            "start": 67,
            "end": 68
          }
        ],
        "declare": false,
        "start": 61,
        "end": 68
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 72,
        "end": 74
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 76,
        "end": 78
      },
      "start": 50,
      "end": 78
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 78
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 19,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 29,
    "end": 34
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 38,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 50,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 54,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 60,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 61,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 69,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 77,
    "end": 78
  }
]
```
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 26
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 35,
              "end": 36
            },
            "start": 29,
            "end": 36
          },
          "definite": false,
          "start": 25,
          "end": 36
        }
      ],
      "declare": false,
      "start": 19,
      "end": 37
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 47
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 47
          },
          "exportKind": "value",
          "start": 46,
          "end": 47
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 38,
      "end": 49
    },
    {
      "type": "ForOfStatement",
      "await": true,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 68
            },
            "init": null,
            "definite": false,
            "start": 67,
            "end": 68
          }
        ],
        "declare": false,
        "start": 61,
        "end": 68
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 72,
        "end": 74
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 76,
        "end": 78
      },
      "start": 50,
      "end": 78
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 78
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 19,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 29,
    "end": 34
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 38,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 50,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 54,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 60,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 61,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 69,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 77,
    "end": 78
  }
]
```
