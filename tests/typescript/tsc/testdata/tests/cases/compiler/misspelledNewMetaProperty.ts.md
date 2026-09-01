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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
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
              "type": "MetaProperty",
              "meta": {
                "type": "Identifier",
                "decorators": [],
                "name": "new",
                "optional": false,
                "typeAnnotation": null,
                "start": 15,
                "end": 18
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "targ",
                "optional": false,
                "typeAnnotation": null,
                "start": 19,
                "end": 23
              },
              "start": 15,
              "end": 23
            },
            "directive": null,
            "start": 15,
            "end": 23
          }
        ],
        "start": 14,
        "end": 24
      },
      "expression": false,
      "start": 0,
      "end": 24
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 24
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
    "value": "foo",
    "start": 9,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 15,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "targ",
    "start": 19,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 23,
    "end": 24
  }
]
```
