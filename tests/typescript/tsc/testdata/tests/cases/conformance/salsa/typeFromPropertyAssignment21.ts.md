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
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Event",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 61
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 71
            },
            "optional": false,
            "computed": false,
            "start": 56,
            "end": 71
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "removeChildren",
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 86
          },
          "optional": false,
          "computed": false,
          "start": 56,
          "end": 86
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
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
                      "start": 107,
                      "end": 111
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "textContent",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 112,
                      "end": 123
                    },
                    "optional": false,
                    "computed": false,
                    "start": 107,
                    "end": 123
                  },
                  "right": {
                    "type": "Literal",
                    "value": "nope, not going to happen",
                    "raw": "'nope, not going to happen'",
                    "start": 126,
                    "end": 153
                  },
                  "start": 107,
                  "end": 153
                },
                "directive": null,
                "start": 107,
                "end": 153
              }
            ],
            "start": 101,
            "end": 155
          },
          "expression": false,
          "start": 89,
          "end": 155
        },
        "start": 56,
        "end": 155
      },
      "directive": null,
      "start": 56,
      "end": 155
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 155
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "Event",
    "start": 56,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 62,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "removeChildren",
    "start": 72,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 89,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 107,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "textContent",
    "start": 112,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 124,
    "end": 125
  },
  {
    "type": "String",
    "value": "'nope, not going to happen'",
    "start": 126,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 154,
    "end": 155
  }
]
```
