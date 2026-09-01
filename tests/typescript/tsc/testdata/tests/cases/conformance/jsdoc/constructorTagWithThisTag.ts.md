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
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 124
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 133,
                  "end": 137
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 138,
                  "end": 139
                },
                "optional": false,
                "computed": false,
                "start": 133,
                "end": 139
              },
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 142,
                    "end": 146
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 147,
                    "end": 148
                  },
                  "optional": false,
                  "computed": false,
                  "start": 142,
                  "end": 148
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 151,
                  "end": 152
                },
                "start": 142,
                "end": 152
              },
              "start": 133,
              "end": 152
            },
            "directive": null,
            "start": 133,
            "end": 152
          }
        ],
        "start": 127,
        "end": 154
      },
      "expression": false,
      "start": 114,
      "end": 154
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 114,
  "end": 154
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 114,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 133,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 142,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 149,
    "end": 150
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154
  }
]
```
