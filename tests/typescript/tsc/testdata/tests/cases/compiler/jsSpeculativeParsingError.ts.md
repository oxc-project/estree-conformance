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
            "name": "is_morning",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 16
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 23,
                    "end": 27
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 19,
                  "end": 29
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getHours",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 30,
                  "end": 38
                },
                "optional": false,
                "computed": false,
                "start": 19,
                "end": 38
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 19,
              "end": 40
            },
            "operator": "<",
            "right": {
              "type": "Literal",
              "value": 12,
              "raw": "12",
              "start": 43,
              "end": 45
            },
            "start": 19,
            "end": 45
          },
          "definite": false,
          "start": 6,
          "end": 45
        }
      ],
      "declare": false,
      "start": 0,
      "end": 46
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
            "name": "greeting",
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 81
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ConditionalExpression",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "is_morning",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 89,
                  "end": 99
                },
                "consequent": {
                  "type": "Literal",
                  "value": "good morning",
                  "raw": "'good morning'",
                  "start": 102,
                  "end": 116
                },
                "alternate": {
                  "type": "Literal",
                  "value": "good evening",
                  "raw": "'good evening'",
                  "start": 119,
                  "end": 133
                },
                "start": 89,
                "end": 133
              }
            ],
            "start": 85,
            "end": 135
          },
          "definite": false,
          "start": 73,
          "end": 136
        }
      ],
      "declare": false,
      "start": 67,
      "end": 137
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 137
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "is_morning",
    "start": 6,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 17,
    "end": 18
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 19,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 23,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "getHours",
    "start": 30,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 41,
    "end": 42
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 43,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 67,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "greeting",
    "start": 73,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "is_morning",
    "start": 89,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 100,
    "end": 101
  },
  {
    "type": "String",
    "value": "'good morning'",
    "start": 102,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "String",
    "value": "'good evening'",
    "start": 119,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  }
]
```
