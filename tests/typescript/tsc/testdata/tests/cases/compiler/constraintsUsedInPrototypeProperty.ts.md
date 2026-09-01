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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 11
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 20,
              "end": 26
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 10,
            "end": 26
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 29
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 28,
            "end": 29
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 32
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 41,
              "end": 47
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 31,
            "end": 47
          }
        ],
        "start": 9,
        "end": 48
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 49,
        "end": 52
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 52
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 53,
          "end": 56
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "prototype",
          "optional": false,
          "typeAnnotation": null,
          "start": 57,
          "end": 66
        },
        "optional": false,
        "computed": false,
        "start": 53,
        "end": 66
      },
      "directive": null,
      "start": 53,
      "end": 67
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 89
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 10,
    "end": 11
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 12,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 20,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 33,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 53,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 57,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  }
]
```
