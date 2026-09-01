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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 110,
        "end": 111
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": null,
          "start": 112,
          "end": 114
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p2",
          "optional": false,
          "typeAnnotation": null,
          "start": 116,
          "end": 118
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p3",
          "optional": false,
          "typeAnnotation": null,
          "start": 120,
          "end": 122
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 124,
        "end": 127
      },
      "expression": false,
      "start": 101,
      "end": 127
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 101,
  "end": 127
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 101,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 112,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 116,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 120,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 126,
    "end": 127
  }
]
```
