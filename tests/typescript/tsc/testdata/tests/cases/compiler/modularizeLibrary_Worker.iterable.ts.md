__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 12,
                  "end": 15
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "entry",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 17,
                  "end": 22
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 23
            },
            "init": null,
            "definite": false,
            "start": 11,
            "end": 23
          }
        ],
        "declare": false,
        "start": 5,
        "end": 23
      },
      "right": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "FormData",
          "optional": false,
          "typeAnnotation": null,
          "start": 31,
          "end": 39
        },
        "typeArguments": null,
        "arguments": [],
        "start": 27,
        "end": 41
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "entry",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 54
            },
            "directive": null,
            "start": 49,
            "end": 55
          }
        ],
        "start": 43,
        "end": 57
      },
      "start": 0,
      "end": 57
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 57
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "for",
    "start": 0,
    "end": 3
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4,
    "end": 5
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 12,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 17,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 24,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 27,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "FormData",
    "start": 31,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 49,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 56,
    "end": 57
  }
]
```
