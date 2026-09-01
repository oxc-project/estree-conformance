__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "protected",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 26
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false,
            "start": 17,
            "end": 26
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 31
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false,
            "start": 30,
            "end": 31
          }
        ],
        "start": 12,
        "end": 33
      },
      "declare": false,
      "start": 0,
      "end": 33
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 33
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "protected",
    "start": 17,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 32,
    "end": 33
  }
]
```
