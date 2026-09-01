__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 7
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 15
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 15
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Literal",
                  "value": 1234,
                  "raw": "1234",
                  "start": 37,
                  "end": 41
                },
                "start": 30,
                "end": 42
              }
            ],
            "start": 24,
            "end": 44
          },
          "id": null,
          "generator": false,
          "start": 18,
          "end": 44
        },
        "start": 0,
        "end": 44
      },
      "directive": null,
      "start": 0,
      "end": 44
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 44
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "exports",
    "start": 0,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 8,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 21,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 30,
    "end": 36
  },
  {
    "type": "Numeric",
    "value": "1234",
    "start": 37,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 43,
    "end": 44
  }
]
```
