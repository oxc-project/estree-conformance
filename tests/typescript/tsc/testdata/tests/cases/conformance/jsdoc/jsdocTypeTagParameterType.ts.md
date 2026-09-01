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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 45
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 49,
                "end": 54
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 65,
                      "end": 70
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 73,
                      "end": 74
                    },
                    "start": 65,
                    "end": 74
                  },
                  "directive": null,
                  "start": 65,
                  "end": 74
                }
              ],
              "start": 59,
              "end": 92
            },
            "id": null,
            "generator": false,
            "start": 48,
            "end": 92
          },
          "definite": false,
          "start": 44,
          "end": 92
        }
      ],
      "declare": false,
      "start": 38,
      "end": 93
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 138,
        "end": 139
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 140,
          "end": 141
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 149,
                "end": 150
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 153,
                "end": 154
              },
              "start": 149,
              "end": 154
            },
            "directive": null,
            "start": 149,
            "end": 154
          }
        ],
        "start": 143,
        "end": 172
      },
      "expression": false,
      "start": 129,
      "end": 172
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 38,
  "end": 172
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 38,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 49,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 56,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 65,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 71,
    "end": 72
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 129,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 151,
    "end": 152
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 171,
    "end": 172
  }
]
```
