__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "outer",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 62
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "start": 77,
                  "end": 78
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 81,
                  "end": 82
                },
                "definite": false,
                "start": 77,
                "end": 82
              }
            ],
            "declare": false,
            "start": 71,
            "end": 83
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "inner",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 102
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 119,
                        "end": 120
                      },
                      "init": {
                        "type": "Literal",
                        "value": "inner",
                        "raw": "\"inner\"",
                        "start": 123,
                        "end": 130
                      },
                      "definite": false,
                      "start": 119,
                      "end": 130
                    }
                  ],
                  "declare": false,
                  "start": 115,
                  "end": 131
                }
              ],
              "start": 105,
              "end": 137
            },
            "expression": false,
            "start": 88,
            "end": 137
          }
        ],
        "start": 65,
        "end": 139
      },
      "expression": false,
      "start": 48,
      "end": 139
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 48,
  "end": 139
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 48,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 57,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 71,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Keyword",
    "value": "function",
    "start": 88,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 97,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 115,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 121,
    "end": 122
  },
  {
    "type": "String",
    "value": "\"inner\"",
    "start": 123,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139
  }
]
```
