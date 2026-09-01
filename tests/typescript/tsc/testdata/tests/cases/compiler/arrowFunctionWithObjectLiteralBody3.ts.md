__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 8,
                "end": 9
              }
            ],
            "returnType": null,
            "body": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 14,
                "end": 17
              },
              "expression": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 18,
                "end": 20
              },
              "start": 13,
              "end": 20
            },
            "id": null,
            "generator": false,
            "start": 8,
            "end": 20
          },
          "definite": false,
          "start": 4,
          "end": 20
        }
      ],
      "declare": false,
      "start": 0,
      "end": 20
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 20
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 10,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 14,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 19,
    "end": 20
  }
]
```
