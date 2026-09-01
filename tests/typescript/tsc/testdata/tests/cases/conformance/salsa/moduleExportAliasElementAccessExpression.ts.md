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
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 14,
        "end": 17
      },
      "expression": false,
      "start": 0,
      "end": 17
    },
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
            "start": 18,
            "end": 25
          },
          "property": {
            "type": "Literal",
            "value": "D",
            "raw": "\"D\"",
            "start": 26,
            "end": 29
          },
          "optional": false,
          "computed": true,
          "start": 18,
          "end": 30
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 33,
          "end": 34
        },
        "start": 18,
        "end": 34
      },
      "directive": null,
      "start": 18,
      "end": 35
    },
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
            "start": 126,
            "end": 133
          },
          "property": {
            "type": "Literal",
            "value": "Does not work yet",
            "raw": "\"Does not work yet\"",
            "start": 134,
            "end": 153
          },
          "optional": false,
          "computed": true,
          "start": 126,
          "end": 154
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 157,
          "end": 158
        },
        "start": 126,
        "end": 158
      },
      "directive": null,
      "start": 126,
      "end": 159
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 159
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 18,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 25,
    "end": 26
  },
  {
    "type": "String",
    "value": "\"D\"",
    "start": 26,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 126,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 133,
    "end": 134
  },
  {
    "type": "String",
    "value": "\"Does not work yet\"",
    "start": 134,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  }
]
```
