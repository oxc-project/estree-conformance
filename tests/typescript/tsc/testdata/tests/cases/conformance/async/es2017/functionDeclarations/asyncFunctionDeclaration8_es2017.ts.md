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
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "await",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 11,
                  "end": 16
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 19,
                  "end": 22
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 10,
                "end": 22
              }
            ],
            "start": 8,
            "end": 24
          },
          "definite": false,
          "start": 4,
          "end": 24
        }
      ],
      "declare": false,
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
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 11,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 19,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 23,
    "end": 24
  }
]
```
