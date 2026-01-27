__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "\"use strict\"",
        "start": 19,
        "end": 31
      },
      "directive": "use strict",
      "start": 19,
      "end": 31
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Doo",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 41
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 42,
        "end": 44
      },
      "abstract": false,
      "declare": false,
      "start": 32,
      "end": 44
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Scooby",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 57
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Doo",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 69
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 70,
        "end": 72
      },
      "abstract": false,
      "declare": false,
      "start": 45,
      "end": 72
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 19,
  "end": 73
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "String",
    "value": "\"use strict\"",
    "start": 19,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 32,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "Doo",
    "start": 38,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 45,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "Scooby",
    "start": 51,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 58,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "Doo",
    "start": 66,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 71,
    "end": 72
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "\"use strict\"",
        "start": 19,
        "end": 31
      },
      "directive": "use strict",
      "start": 19,
      "end": 31
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "Another prologue",
        "raw": "\"Another prologue\"",
        "start": 32,
        "end": 50
      },
      "directive": "Another prologue",
      "start": 32,
      "end": 50
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dood",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 61
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 62,
        "end": 64
      },
      "abstract": false,
      "declare": false,
      "start": 51,
      "end": 64
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Scoobyd",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 78
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dood",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 91
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 92,
        "end": 94
      },
      "abstract": false,
      "declare": false,
      "start": 65,
      "end": 94
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 19,
  "end": 94
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "String",
    "value": "\"use strict\"",
    "start": 19,
    "end": 31
  },
  {
    "type": "String",
    "value": "\"Another prologue\"",
    "start": 32,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 51,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "Dood",
    "start": 57,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 63,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 65,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "Scoobyd",
    "start": 71,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 79,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "Dood",
    "start": 87,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 93,
    "end": 94
  }
]
```
