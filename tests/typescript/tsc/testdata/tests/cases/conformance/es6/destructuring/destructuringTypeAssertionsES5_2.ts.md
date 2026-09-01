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
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6,
                  "end": 7
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6,
                  "end": 7
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 6,
                "end": 7
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 9
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 14,
              "end": 17
            },
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 18,
                "end": 21
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 18,
              "end": 23
            },
            "start": 13,
            "end": 23
          },
          "definite": false,
          "start": 4,
          "end": 24
        }
      ],
      "declare": false,
      "start": 0,
      "end": 25
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 25
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
    "type": "Punctuator",
    "value": "{",
    "start": 4,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12,
    "end": 13
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
    "type": "Identifier",
    "value": "foo",
    "start": 18,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 24,
    "end": 25
  }
]
```
