__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Map",
          "optional": false,
          "typeAnnotation": null,
          "start": 4,
          "end": 7
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 8,
              "end": 14
            }
          ],
          "start": 7,
          "end": 15
        },
        "arguments": [],
        "start": 0,
        "end": 17
      },
      "directive": null,
      "start": 0,
      "end": 18
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "WeakMap",
          "optional": false,
          "typeAnnotation": null,
          "start": 23,
          "end": 30
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSObjectKeyword",
              "start": 31,
              "end": 37
            }
          ],
          "start": 30,
          "end": 38
        },
        "arguments": [],
        "start": 19,
        "end": 40
      },
      "directive": null,
      "start": 19,
      "end": 41
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 41
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "new",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 4,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 8,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "WeakMap",
    "start": 23,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 37,
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
    "value": ";",
    "start": 40,
    "end": 41
  }
]
```
