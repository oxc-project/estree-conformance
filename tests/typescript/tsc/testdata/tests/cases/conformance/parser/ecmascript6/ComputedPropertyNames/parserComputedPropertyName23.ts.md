__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 15
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 28
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 33,
                  "end": 39
                },
                "start": 31,
                "end": 39
              },
              "body": null,
              "expression": false,
              "start": 29,
              "end": 39
            },
            "kind": "get",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 22,
            "end": 39
          }
        ],
        "start": 16,
        "end": 42
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 42
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 42
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 22,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 33,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 41,
    "end": 42
  }
]
```
