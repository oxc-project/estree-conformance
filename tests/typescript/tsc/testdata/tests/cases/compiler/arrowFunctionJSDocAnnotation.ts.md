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
        "name": "identity",
        "optional": false,
        "typeAnnotation": null,
        "start": 35,
        "end": 43
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": null,
          "start": 44,
          "end": 45
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 61
            },
            "start": 53,
            "end": 62
          }
        ],
        "start": 47,
        "end": 64
      },
      "expression": false,
      "start": 26,
      "end": 64
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 73
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "identity",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 84
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 161,
                    "end": 166
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 170,
                  "end": 175
                },
                "id": null,
                "generator": false,
                "start": 161,
                "end": 175
              }
            ],
            "optional": false,
            "start": 76,
            "end": 177
          },
          "definite": false,
          "start": 72,
          "end": 177
        }
      ],
      "declare": false,
      "start": 66,
      "end": 178
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 26,
  "end": 178
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 26,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 35,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 53,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 63,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 66,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 76,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 161,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 167,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 170,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178
  }
]
```
