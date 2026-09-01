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
        "start": 10,
        "end": 11
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Iterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 23
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 24,
                "end": 30
              }
            ],
            "start": 23,
            "end": 31
          },
          "start": 15,
          "end": 31
        },
        "start": 13,
        "end": 31
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalid",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 52
            },
            "start": 38,
            "end": 53
          }
        ],
        "start": 32,
        "end": 55
      },
      "expression": false,
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
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 10,
    "end": 11
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
    "value": ":",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 15,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 24,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 38,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "invalid",
    "start": 45,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 54,
    "end": 55
  }
]
```
