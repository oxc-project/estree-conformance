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
            "name": "x",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 14,
                  "end": 15
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 14,
                  "end": 15
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 14,
                "end": 15
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefinedVariable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 27,
                  "end": 44
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefinedVariable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 27,
                  "end": 44
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 27,
                "end": 44
              }
            ],
            "start": 8,
            "end": 55
          },
          "definite": false,
          "start": 4,
          "end": 55
        }
      ],
      "declare": false,
      "start": 0,
      "end": 55
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 55
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
    "value": "x",
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
    "type": "Identifier",
    "value": "x",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "undefinedVariable",
    "start": 27,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 54,
    "end": 55
  }
]
```
